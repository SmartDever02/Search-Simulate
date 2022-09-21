const FilterHelper = {
  withKey: (data: Array<ArtDataType>, key: string) => {
    return data.filter((_data) => {
      return JSON.stringify(_data).toLowerCase().includes(key.toLowerCase());
    });
  },
};
export default FilterHelper;
