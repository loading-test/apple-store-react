const Device = require('../models/Device');
const deviceMock = require('../mock/devices.json');

module.exports = async () => {
  const devices = await Device.find();
  if (devices.length !== deviceMock.length) {
    await createInitialEntity(Device, deviceMock);
  }
};

async function createInitialEntity(Model, data) {
  // await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    }),
  );
}
