export interface Characteristic {
	name: string;
	unit: string;
	length: number;
	dataType: 'string' | 'integer' | 'float' | 'boolean';
	defaultValue: string;
}

export interface Property {
	name: string;
	unit: string;
	length: number;
	dataType: 'string' | 'integer' | 'float' | 'boolean';
	accessMode: 'r' | 'rw' | 'w';
	min?: number;
	max?: number;
}

export interface PropertySet {
	[key: string]: Property;
}

export interface ThingType {
	name: string;
	tenant: string;
	id: string;
	parentTypeId: string;
	version: string;
	createdBy: string;
	updatedBy: string;
	createdTime: string;
	updatedTime: string;
	description: string;
	characteristics: { [key: string]: Characteristic };
	propertySets: { [key: string]: PropertySet };
}