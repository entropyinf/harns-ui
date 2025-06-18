import type { ThingType } from './types';

const thingTypeList: ThingType[] = [
  {
    name: '传感器',
    tenant: 'tenant1',
    id: 'sensor',
    parentTypeId: '',
    version: '1.0',
    createdBy: 'user1',
    updatedBy: 'user1',
    createdTime: '2024-01-01T00:00:00Z',
    updatedTime: '2024-01-01T00:00:00Z',
    description: 'This is the root thing type.',
    characteristics: {
      char1: {
        name: 'Characteristic 1',
        unit: 'Unit1',
        length: 10,
        dataType: 'string',
        defaultValue: 'Default'
      }
    },
    propertySets: {
      set1: {
        prop1: {
          name: 'Property 1',
          unit: 'Unit1',
          length: 10,
          dataType: 'string',
          accessMode: 'rw',
          min: 0,
          max: 100
        }
      }
    }
  },
  {
    name: '温度传感器',
    tenant: 'tenant1',
    id: 'temparature-sensor',
    parentTypeId: 'sensor',
    version: '1.0',
    createdBy: 'user1',
    updatedBy: 'user1',
    createdTime: '2024-01-02T00:00:00Z',
    updatedTime: '2024-01-02T00:00:00Z',
    description: 'This is a child thing type.',
    characteristics: {
      char1: {
        name: 'Characteristic 1',
        unit: 'Unit1',
        length: 10,
        dataType: 'string',
        defaultValue: 'Default'
      }
    },
    propertySets: {
      set1: {
        prop1: {
          name: 'Property 1',
          unit: 'Unit1',
          length: 10,
          dataType: 'string',
          accessMode: 'rw',
          min: 0,
          max: 100
        }
      }
    }
  },
  {
    name: '湿度传感器',
    tenant: 'tenant1',
    id: 'child-002',
    parentTypeId: 'sensor',
    version: '1.0',
    createdBy: 'user1',
    updatedBy: 'user1',
    createdTime: '2024-01-03T00:00:00Z',
    updatedTime: '2024-01-03T00:00:00Z',
    description: 'This is a child thing type.',
    characteristics: {
      char1: {
        name: 'Characteristic 1',
        unit: 'Unit1',
        length: 10,
        dataType: 'string',
        defaultValue: 'Default'
      }
    },
    propertySets: {
      set1: {
        prop1: {
          name: 'Property 1',
          unit: 'Unit1',
          length: 10,
          dataType: 'string',
          accessMode: 'rw',
          min: 0,
          max: 100
        }
      }
    }
  },
  {
    name: '地点',
    tenant: 'tenant1',
    id: 'positon',
    parentTypeId: '',
    version: '1.0',
    createdBy: 'user1',
    updatedBy: 'user1',
    createdTime: '2024-01-01T00:00:00Z',
    updatedTime: '2024-01-01T00:00:00Z',
    description: 'This is the root thing type.',
    characteristics: {
      char1: {
        name: 'Characteristic 1',
        unit: 'Unit1',
        length: 10,
        dataType: 'string',
        defaultValue: 'Default'
      }
    },
    propertySets: {
      set1: {
        prop1: {
          name: 'Property 1',
          unit: 'Unit1',
          length: 10,
          dataType: 'string',
          accessMode: 'rw',
          min: 0,
          max: 100
        }
      }
    }
  }
];

export default thingTypeList;