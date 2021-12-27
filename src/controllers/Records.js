const Service = require('../services/Records');
const RecordService = new Service();
const ApiError = require('../errors/ApiError');

/*
 *description : getRecords Request Handler for fetching data from db
 *@params(req : Request Body Object, res : Response, next: Callback Function)
 *@return Object with response payload
 */

class RecordsController {
  getRecords(req, res, next) {
    // Assign endDate to variable because we weil modify it
    const endDate = new Date(req.body.endDate);
    const startDate = new Date(req.body.startDate);
    const { maxCount, minCount } = req.body;

    // Query for fetch data from db
    const pipeline = [
      {
        // Query for createdAt property
        //! Filter before adding total count param to reduce time and effort for fetch process
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: new Date(endDate.setHours(23, 59, 59, 999)),
          },
        },
      },
      {
        // Add totalCount field to response payload
        $addFields: {
          totalCount: {
            $reduce: {
              input: '$counts',
              initialValue: 0,
              in: { $add: ['$$value', '$$this'] },
            },
          },
        },
      },
      {
        // Query for totalCount property
        $match: {
          totalCount: { $gte: minCount, $lte: maxCount },
        },
      },
      {
        // Remove unneccessary fields from response payload
        $project: {
          _id: 0,
          value: 0,
          counts: 0,
        },
      },
    ];

    // Request object for get data from API
    const records = RecordService.list(pipeline)
      .then((data) => {
        // return notFound error if response payload not found
        if (!data) {
          return next(ApiError.notFound('No data found with that query'));
        }

        // return response payload if request made successfully
        res.status(200).json({
          code: 0,
          msg: 'Success',
          records: data,
        });
      })
      .catch((err) =>
        // return internal server error if there is problem with server
        next(
          ApiError.internalError('Something wrong happened in internal server')
        )
      );
  }
}

module.exports = new RecordsController();
