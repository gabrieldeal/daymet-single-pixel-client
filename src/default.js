/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns a csv or json of the requested data to local machine
 * 
 * @param {number} lat Latitude component of location.
 * @param {number} lon Longitude component of location.
 * @param {string} format Enum: csv, json. Specify a format for data retrieval.
 * @param {object} options Optional options
 * @param {string[]} [options.vars] Daymet Daily weather estimates.
 * @param {string[]} [options.years] Subset on years [1980..2017].
 * @param {date} [options.start] Subset on dates (start date).
 * @param {date} [options.end] Subset on dates (end date).
 * @return {Promise<object>} Successful Execution
 */
export function getApiData(lat, lon, format, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat,
      lon,
      vars: gateway.formatArrayParam(options.vars, 'csv', 'vars'),
      years: gateway.formatArrayParam(options.years, 'csv', 'years'),
      start: gateway.formatDate(options.start, 'date'),
      end: gateway.formatDate(options.end, 'date'),
      format
    }
  }
  return gateway.request(getApiDataOperation, parameters)
}

/**
 * Returns a table to the browser displaying requested data
 * 
 * @param {number} lat Latitude component of location
 * @param {number} lon Longitude component of location.
 * @param {string} format Enum: csv, json. Specify a format for data retrieval.
 * @param {object} options Optional options
 * @param {string[]} [options.vars] Daymet Daily weather estimates.
 * @param {string[]} [options.years] Subset on years [1980..2016].
 * @param {date} [options.start] Subset on dates (start date).
 * @param {date} [options.end] Subset on dates (end date).
 * @return {Promise<object>} Successful Execution
 */
export function getPreview(lat, lon, format, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat,
      lon,
      vars: gateway.formatArrayParam(options.vars, 'csv', 'vars'),
      years: gateway.formatArrayParam(options.years, 'csv', 'years'),
      start: gateway.formatDate(options.start, 'date'),
      end: gateway.formatDate(options.end, 'date'),
      format
    }
  }
  return gateway.request(getPreviewOperation, parameters)
}

/**
 * Returns a csv or json of the requested data to local machine
 * 
 * @param {number} lat Latitude component of location.
 * @param {number} lon Longitude component of location.
 * @param {string} format Enum: csv, json. Specify a format for data retrieval.
 * @param {object} options Optional options
 * @param {string[]} [options.vars] Daymet Daily weather estimates.
 * @param {string[]} [options.years] Subset on years [1980..2016].
 * @param {date} [options.start] Subset on dates (start date).
 * @param {date} [options.end] Subset on dates (end date).
 * @return {Promise<object>} Successful Execution
 */
export function getSendSaveData(lat, lon, format, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat,
      lon,
      vars: gateway.formatArrayParam(options.vars, 'csv', 'vars'),
      years: gateway.formatArrayParam(options.years, 'csv', 'years'),
      start: gateway.formatDate(options.start, 'date'),
      end: gateway.formatDate(options.end, 'date'),
      format
    }
  }
  return gateway.request(getSendSaveDataOperation, parameters)
}

/**
 * Returns plots to a web browser of requested data using Plotly
 * 
 * @param {number} lat Latitude component of location.
 * @param {number} lon Longitude component of location.
 * @param {string} format Enum: csv, json. Specify a format for data retrieval.
 * @param {object} options Optional options
 * @param {string[]} [options.vars] Daymet Daily weather estimates.
 * @param {string[]} [options.years] Subset on years [1980..2016].
 * @param {date} [options.start] Subset on dates (start date).
 * @param {date} [options.end] Subset on dates (end date).
 * @return {Promise<object>} Successful Execution
 */
export function getVisualize(lat, lon, format, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat,
      lon,
      vars: gateway.formatArrayParam(options.vars, 'csv', 'vars'),
      years: gateway.formatArrayParam(options.years, 'csv', 'years'),
      start: gateway.formatDate(options.start, 'date'),
      end: gateway.formatDate(options.end, 'date'),
      format
    }
  }
  return gateway.request(getVisualizeOperation, parameters)
}

const getApiDataOperation = {
  path: '/api/data',
  method: 'get'
}

const getPreviewOperation = {
  path: '/preview',
  method: 'get'
}

const getSendSaveDataOperation = {
  path: '/send/saveData',
  method: 'get'
}

const getVisualizeOperation = {
  path: '/visualize',
  method: 'get'
}
