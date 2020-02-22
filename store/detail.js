export const state = () => {
  return {
    Detail: {
      hotelbrand: {},
      location: {},
      scores: {}
    }
  };
};

export const mutations = {
  setHotelInfo(state, data) {
    state.Detail = data;
  }
};
