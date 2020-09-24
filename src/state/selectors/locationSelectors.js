// eslint-disable-next-line import/prefer-default-export
export function getCurrentLocation(state) {
  if (state.settings.useLiveLocation) {
    return { name: 'Live!' }; // TODO
  }

  return state.locations.find((loc) => loc.current);
}
