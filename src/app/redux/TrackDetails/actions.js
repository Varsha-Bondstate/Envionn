/* jshint ignore:start */
import TrackDetailsType from './types';

// actions
const fetchTrackDetailsBegin = () => ({
  type: TrackDetailsType.FETCH_TRACKDETAILS_BEGIN,
});

const fetchTrackDetailsGetActivities = payload => ({
  type: TrackDetailsType.FETCH_TRACKDETAILS_GETACTIVITIES,
  payload: payload,
});

const fetchTrackDetailsSaveSteps = payload => ({
  type: TrackDetailsType.FETCH_TRACKDETAILS_SAVE_STEPS,
  payload: payload,
});

const fetchTrackDetailsFailure = payload => ({
  type: TrackDetailsType.FETCH_TRACKDETAILS_FAILURE,
  payload: payload,
});

export default {
  fetchTrackDetailsBegin,
  fetchTrackDetailsGetActivities,
  fetchTrackDetailsSaveSteps,
  fetchTrackDetailsFailure,
};
