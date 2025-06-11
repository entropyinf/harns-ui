import type { ThingType } from './types';

const thingTypeList: ThingType[] = [
	{
		name: 'Root Thing Type',
		tenant: 'tenant1',
		id: 'root-001',
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
		name: 'Child Thing Type 1',
		tenant: 'tenant1',
		id: 'child-001',
		parentTypeId: 'root-001',
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
		name: 'Child Thing Type 2',
		tenant: 'tenant1',
		id: 'child-002',
		parentTypeId: 'root-001',
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
		name: 'Grandchild Thing Type 1',
		tenant: 'tenant1',
		id: 'grandchild-001',
		parentTypeId: 'child-001',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-04T00:00:00Z',
		updatedTime: '2024-01-04T00:00:00Z',
		description: 'This is a grandchild thing type.',
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
		name: 'Grandchild Thing Type 2',
		tenant: 'tenant1',
		id: 'grandchild-002',
		parentTypeId: 'child-001',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-05T00:00:00Z',
		updatedTime: '2024-01-05T00:00:00Z',
		description: 'This is a grandchild thing type.',
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
		name: 'Child Thing Type 3',
		tenant: 'tenant1',
		id: 'child-003',
		parentTypeId: 'root-001',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-06T00:00:00Z',
		updatedTime: '2024-01-06T00:00:00Z',
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
		name: 'Grandchild Thing Type 3',
		tenant: 'tenant1',
		id: 'grandchild-003',
		parentTypeId: 'child-002',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-07T00:00:00Z',
		updatedTime: '2024-01-07T00:00:00Z',
		description: 'This is a grandchild thing type.',
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
		name: 'Grandchild Thing Type 4',
		tenant: 'tenant1',
		id: 'grandchild-004',
		parentTypeId: 'child-002',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-08T00:00:00Z',
		updatedTime: '2024-01-08T00:00:00Z',
		description: 'This is a grandchild thing type.',
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
		name: 'Child Thing Type 4',
		tenant: 'tenant1',
		id: 'child-004',
		parentTypeId: '',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-09T00:00:00Z',
		updatedTime: '2024-01-09T00:00:00Z',
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
		name: 'Grandchild Thing Type 5',
		tenant: 'tenant1',
		id: 'grandchild-005',
		parentTypeId: 'child-003',
		version: '1.0',
		createdBy: 'user1',
		updatedBy: 'user1',
		createdTime: '2024-01-10T00:00:00Z',
		updatedTime: '2024-01-10T00:00:00Z',
		description: 'This is a grandchild thing type.',
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