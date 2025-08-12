import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Customer (1)', type: 'live' };

interface anemometerDimension extends Dimension {
    app_key: Attribute;
    eui: Attribute;
    inserted_by: Attribute;
    lat: Attribute;
    lns_config: Attribute;
    lon: Attribute;
    anemometer_name: Attribute;
    owner: Attribute;
    site_uuid: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const anemometer = createDimension({
    name: 'anemometer',
    app_key: createAttribute({
        name: 'app_key',
        type: 'text-attribute',
        expression: '[anemometer.app_key]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    eui: createAttribute({
        name: 'eui',
        type: 'text-attribute',
        expression: '[anemometer.eui]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[anemometer.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[anemometer.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lns_config: createAttribute({
        name: 'lns_config',
        type: 'text-attribute',
        expression: '[anemometer.lns_config]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[anemometer.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    anemometer_name: createAttribute({
        name: '[anemometer.name]',
        type: 'text-attribute',
        expression: '[anemometer.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    owner: createAttribute({
        name: 'owner',
        type: 'text-attribute',
        expression: '[anemometer.owner]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_uuid: createAttribute({
        name: 'site_uuid',
        type: 'text-attribute',
        expression: '[anemometer.site_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[anemometer.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[anemometer.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[anemometer.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[anemometer.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as anemometerDimension;

interface anemometer_dataDimension extends Dimension {
    anemometer_uuid: Attribute;
    anemometer_data_id: Attribute;
    inserted_by: Attribute;
    num_of_val_avg: Attribute;
    reporting_freq: Attribute;
    updated_by: Attribute;
    wind_direction: Attribute;
    wind_speed: Attribute;
    datetime: DateDimension;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const anemometer_data = createDimension({
    name: 'anemometer_data',
    anemometer_uuid: createAttribute({
        name: 'anemometer_uuid',
        type: 'text-attribute',
        expression: '[anemometer_data.anemometer_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    anemometer_data_id: createAttribute({
        name: '[anemometer_data.id]',
        type: 'numeric-attribute',
        expression: '[anemometer_data.id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[anemometer_data.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    num_of_val_avg: createAttribute({
        name: 'num_of_val_avg',
        type: 'numeric-attribute',
        expression: '[anemometer_data.num_of_val_avg]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    reporting_freq: createAttribute({
        name: 'reporting_freq',
        type: 'numeric-attribute',
        expression: '[anemometer_data.reporting_freq]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[anemometer_data.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    wind_direction: createAttribute({
        name: 'wind_direction',
        type: 'numeric-attribute',
        expression: '[anemometer_data.wind_direction]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    wind_speed: createAttribute({
        name: 'wind_speed',
        type: 'numeric-attribute',
        expression: '[anemometer_data.wind_speed]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    datetime: createDateDimension({
        name: 'datetime',
        expression: '[anemometer_data.datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[anemometer_data.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[anemometer_data.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as anemometer_dataDimension;

interface customerDimension extends Dimension {
    address_line1: Attribute;
    address_line2: Attribute;
    city: Attribute;
    country: Attribute;
    dormant_days: Attribute;
    email_id: Attribute;
    image_icon: Attribute;
    image_logo: Attribute;
    inserted_by: Attribute;
    lns_config: Attribute;
    customer_name: Attribute;
    setting: Attribute;
    state: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    zip: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const customer = createDimension({
    name: 'customer',
    address_line1: createAttribute({
        name: 'address_line1',
        type: 'text-attribute',
        expression: '[customer.address_line1]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    address_line2: createAttribute({
        name: 'address_line2',
        type: 'text-attribute',
        expression: '[customer.address_line2]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    city: createAttribute({
        name: 'city',
        type: 'text-attribute',
        expression: '[customer.city]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    country: createAttribute({
        name: 'country',
        type: 'text-attribute',
        expression: '[customer.country]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    dormant_days: createAttribute({
        name: 'dormant_days',
        type: 'numeric-attribute',
        expression: '[customer.dormant_days]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    email_id: createAttribute({
        name: 'email_id',
        type: 'text-attribute',
        expression: '[customer.email_id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    image_icon: createAttribute({
        name: 'image_icon',
        type: 'text-attribute',
        expression: '[customer.image_icon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    image_logo: createAttribute({
        name: 'image_logo',
        type: 'text-attribute',
        expression: '[customer.image_logo]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[customer.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lns_config: createAttribute({
        name: 'lns_config',
        type: 'text-attribute',
        expression: '[customer.lns_config]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    customer_name: createAttribute({
        name: '[customer.name]',
        type: 'text-attribute',
        expression: '[customer.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    setting: createAttribute({
        name: 'setting',
        type: 'text-attribute',
        expression: '[customer.setting]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    state: createAttribute({
        name: 'state',
        type: 'text-attribute',
        expression: '[customer.state]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[customer.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[customer.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    zip: createAttribute({
        name: 'zip',
        type: 'text-attribute',
        expression: '[customer.zip]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[customer.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[customer.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as customerDimension;

interface endpointDimension extends Dimension {
    app_key: Attribute;
    eui: Attribute;
    gas: Attribute;
    height_agl: Attribute;
    inserted_by: Attribute;
    lat: Attribute;
    lns_config: Attribute;
    lon: Attribute;
    endpoint_name: Attribute;
    owner: Attribute;
    site_uuid: Attribute;
    endpoint_type: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    x_distance: Attribute;
    y_distance: Attribute;
    z_distance: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const endpoint = createDimension({
    name: 'endpoint',
    app_key: createAttribute({
        name: 'app_key',
        type: 'text-attribute',
        expression: '[endpoint.app_key]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    eui: createAttribute({
        name: 'eui',
        type: 'text-attribute',
        expression: '[endpoint.eui]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    gas: createAttribute({
        name: 'gas',
        type: 'text-attribute',
        expression: '[endpoint.gas]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    height_agl: createAttribute({
        name: 'height_agl',
        type: 'numeric-attribute',
        expression: '[endpoint.height_agl]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[endpoint.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[endpoint.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lns_config: createAttribute({
        name: 'lns_config',
        type: 'text-attribute',
        expression: '[endpoint.lns_config]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[endpoint.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    endpoint_name: createAttribute({
        name: '[endpoint.name]',
        type: 'text-attribute',
        expression: '[endpoint.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    owner: createAttribute({
        name: 'owner',
        type: 'text-attribute',
        expression: '[endpoint.owner]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_uuid: createAttribute({
        name: 'site_uuid',
        type: 'text-attribute',
        expression: '[endpoint.site_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    endpoint_type: createAttribute({
        name: '[endpoint.type]',
        type: 'text-attribute',
        expression: '[endpoint.type]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[endpoint.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[endpoint.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    x_distance: createAttribute({
        name: 'x_distance',
        type: 'numeric-attribute',
        expression: '[endpoint.x_distance]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    y_distance: createAttribute({
        name: 'y_distance',
        type: 'numeric-attribute',
        expression: '[endpoint.y_distance]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    z_distance: createAttribute({
        name: 'z_distance',
        type: 'numeric-attribute',
        expression: '[endpoint.z_distance]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[endpoint.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[endpoint.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as endpointDimension;

interface endpoint_dataDimension extends Dimension {
    abs_humidity: Attribute;
    battery_voltage: Attribute;
    cycle_count: Attribute;
    ddsc_max_comp_norm: Attribute;
    ddsc_mid_comp_norm: Attribute;
    endpoint_uuid: Attribute;
    endpoint_data_id: Attribute;
    inserted_by: Attribute;
    leak_concentration: Attribute;
    methane_conc_ppm_calc: Attribute;
    pressure: Attribute;
    rel_humidity: Attribute;
    temp: Attribute;
    updated_by: Attribute;
    datetime: DateDimension;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const endpoint_data = createDimension({
    name: 'endpoint_data',
    abs_humidity: createAttribute({
        name: 'abs_humidity',
        type: 'numeric-attribute',
        expression: '[endpoint_data.abs_humidity]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    battery_voltage: createAttribute({
        name: 'battery_voltage',
        type: 'numeric-attribute',
        expression: '[endpoint_data.battery_voltage]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    cycle_count: createAttribute({
        name: 'cycle_count',
        type: 'numeric-attribute',
        expression: '[endpoint_data.cycle_count]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    ddsc_max_comp_norm: createAttribute({
        name: 'ddsc_max_comp_norm',
        type: 'numeric-attribute',
        expression: '[endpoint_data.ddsc_max_comp_norm]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    ddsc_mid_comp_norm: createAttribute({
        name: 'ddsc_mid_comp_norm',
        type: 'numeric-attribute',
        expression: '[endpoint_data.ddsc_mid_comp_norm]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    endpoint_uuid: createAttribute({
        name: 'endpoint_uuid',
        type: 'text-attribute',
        expression: '[endpoint_data.endpoint_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    endpoint_data_id: createAttribute({
        name: '[endpoint_data.id]',
        type: 'numeric-attribute',
        expression: '[endpoint_data.id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[endpoint_data.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_concentration: createAttribute({
        name: 'leak_concentration',
        type: 'numeric-attribute',
        expression: '[endpoint_data.leak_concentration]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    methane_conc_ppm_calc: createAttribute({
        name: 'methane_conc_ppm_calc',
        type: 'numeric-attribute',
        expression: '[endpoint_data.methane_conc_ppm_calc]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    pressure: createAttribute({
        name: 'pressure',
        type: 'numeric-attribute',
        expression: '[endpoint_data.pressure]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    rel_humidity: createAttribute({
        name: 'rel_humidity',
        type: 'numeric-attribute',
        expression: '[endpoint_data.rel_humidity]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    temp: createAttribute({
        name: 'temp',
        type: 'numeric-attribute',
        expression: '[endpoint_data.temp]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[endpoint_data.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    datetime: createDateDimension({
        name: 'datetime',
        expression: '[endpoint_data.datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[endpoint_data.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[endpoint_data.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as endpoint_dataDimension;

interface gatewayDimension extends Dimension {
    desc: Attribute;
    eui: Attribute;
    inserted_by: Attribute;
    lns_config: Attribute;
    location: Attribute;
    gateway_name: Attribute;
    organization_name: Attribute;
    site_uuid: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const gateway = createDimension({
    name: 'gateway',
    desc: createAttribute({
        name: 'desc',
        type: 'text-attribute',
        expression: '[gateway.desc]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    eui: createAttribute({
        name: 'eui',
        type: 'text-attribute',
        expression: '[gateway.eui]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[gateway.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lns_config: createAttribute({
        name: 'lns_config',
        type: 'text-attribute',
        expression: '[gateway.lns_config]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    location: createAttribute({
        name: 'location',
        type: 'text-attribute',
        expression: '[gateway.location]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    gateway_name: createAttribute({
        name: '[gateway.name]',
        type: 'text-attribute',
        expression: '[gateway.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    organization_name: createAttribute({
        name: 'organization_name',
        type: 'text-attribute',
        expression: '[gateway.organization_name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_uuid: createAttribute({
        name: 'site_uuid',
        type: 'text-attribute',
        expression: '[gateway.site_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[gateway.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[gateway.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[gateway.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[gateway.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as gatewayDimension;

interface leak_source_isolationDimension extends Dimension {
    certainity: Attribute;
    inserted_by: Attribute;
    lat: Attribute;
    leak_rate: Attribute;
    lon: Attribute;
    lsi_param: Attribute;
    resolved: Attribute;
    run_uuid: Attribute;
    section_uuid: Attribute;
    status: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    xfer_to_wms: Attribute;
    datetime: DateDimension;
    insert_datetime: DateDimension;
    last_data_datetime: DateDimension;
    leak_end_datetime: DateDimension;
    leak_start_datetime: DateDimension;
    resolution_datetime: DateDimension;
    scheduled_repair_datetime: DateDimension;
    update_datetime: DateDimension;
    xfer_datetime: DateDimension;
}
export const leak_source_isolation = createDimension({
    name: 'leak_source_isolation',
    certainity: createAttribute({
        name: 'certainity',
        type: 'numeric-attribute',
        expression: '[leak_source_isolation.certainity]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[leak_source_isolation.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[leak_source_isolation.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate: createAttribute({
        name: 'leak_rate',
        type: 'numeric-attribute',
        expression: '[leak_source_isolation.leak_rate]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[leak_source_isolation.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lsi_param: createAttribute({
        name: 'lsi_param',
        type: 'text-attribute',
        expression: '[leak_source_isolation.lsi_param]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    resolved: createAttribute({
        name: 'resolved',
        type: 'text-attribute',
        expression: '[leak_source_isolation.resolved]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    run_uuid: createAttribute({
        name: 'run_uuid',
        type: 'text-attribute',
        expression: '[leak_source_isolation.run_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_uuid: createAttribute({
        name: 'section_uuid',
        type: 'text-attribute',
        expression: '[leak_source_isolation.section_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[leak_source_isolation.status]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[leak_source_isolation.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[leak_source_isolation.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    xfer_to_wms: createAttribute({
        name: 'xfer_to_wms',
        type: 'text-attribute',
        expression: '[leak_source_isolation.xfer_to_wms]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    datetime: createDateDimension({
        name: 'datetime',
        expression: '[leak_source_isolation.datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[leak_source_isolation.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    last_data_datetime: createDateDimension({
        name: 'last_data_datetime',
        expression: '[leak_source_isolation.last_data_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_end_datetime: createDateDimension({
        name: 'leak_end_datetime',
        expression: '[leak_source_isolation.leak_end_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_start_datetime: createDateDimension({
        name: 'leak_start_datetime',
        expression: '[leak_source_isolation.leak_start_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    resolution_datetime: createDateDimension({
        name: 'resolution_datetime',
        expression: '[leak_source_isolation.resolution_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    scheduled_repair_datetime: createDateDimension({
        name: 'scheduled_repair_datetime',
        expression: '[leak_source_isolation.scheduled_repair_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[leak_source_isolation.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    xfer_datetime: createDateDimension({
        name: 'xfer_datetime',
        expression: '[leak_source_isolation.xfer_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as leak_source_isolationDimension;

interface lsi_wind_combinedDimension extends Dimension {
    an_anemometer_uuid: Attribute;
    an_id: Attribute;
    an_inserted_by: Attribute;
    an_num_of_val_avg: Attribute;
    an_reporting_freq: Attribute;
    an_updated_by: Attribute;
    an_wind_direction: Attribute;
    an_wind_speed: Attribute;
    certainity: Attribute;
    inserted_by: Attribute;
    lat: Attribute;
    leak_rate: Attribute;
    lon: Attribute;
    lsi_param: Attribute;
    resolved: Attribute;
    run_uuid: Attribute;
    section_uuid: Attribute;
    status: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    xfer_to_wms: Attribute;
    an_datetime: DateDimension;
    an_insert_datetime: DateDimension;
    an_update_datetime: DateDimension;
    datetime: DateDimension;
    insert_datetime: DateDimension;
    last_data_datetime: DateDimension;
    leak_end_datetime: DateDimension;
    leak_start_datetime: DateDimension;
    resolution_datetime: DateDimension;
    scheduled_repair_datetime: DateDimension;
    update_datetime: DateDimension;
    xfer_datetime: DateDimension;
}
export const lsi_wind_combined = createDimension({
    name: 'lsi_wind_combined',
    an_anemometer_uuid: createAttribute({
        name: 'an_anemometer_uuid',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.an_anemometer_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_id: createAttribute({
        name: 'an_id',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.an_id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_inserted_by: createAttribute({
        name: 'an_inserted_by',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.an_inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_num_of_val_avg: createAttribute({
        name: 'an_num_of_val_avg',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.an_num_of_val_avg]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_reporting_freq: createAttribute({
        name: 'an_reporting_freq',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.an_reporting_freq]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_updated_by: createAttribute({
        name: 'an_updated_by',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.an_updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_wind_direction: createAttribute({
        name: 'an_wind_direction',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.an_wind_direction]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_wind_speed: createAttribute({
        name: 'an_wind_speed',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.an_wind_speed]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    certainity: createAttribute({
        name: 'certainity',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.certainity]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate: createAttribute({
        name: 'leak_rate',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.leak_rate]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[lsi_wind_combined.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lsi_param: createAttribute({
        name: 'lsi_param',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.lsi_param]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    resolved: createAttribute({
        name: 'resolved',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.resolved]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    run_uuid: createAttribute({
        name: 'run_uuid',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.run_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_uuid: createAttribute({
        name: 'section_uuid',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.section_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.status]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    xfer_to_wms: createAttribute({
        name: 'xfer_to_wms',
        type: 'text-attribute',
        expression: '[lsi_wind_combined.xfer_to_wms]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_datetime: createDateDimension({
        name: 'an_datetime',
        expression: '[lsi_wind_combined.an_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_insert_datetime: createDateDimension({
        name: 'an_insert_datetime',
        expression: '[lsi_wind_combined.an_insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    an_update_datetime: createDateDimension({
        name: 'an_update_datetime',
        expression: '[lsi_wind_combined.an_update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    datetime: createDateDimension({
        name: 'datetime',
        expression: '[lsi_wind_combined.datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[lsi_wind_combined.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    last_data_datetime: createDateDimension({
        name: 'last_data_datetime',
        expression: '[lsi_wind_combined.last_data_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_end_datetime: createDateDimension({
        name: 'leak_end_datetime',
        expression: '[lsi_wind_combined.leak_end_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_start_datetime: createDateDimension({
        name: 'leak_start_datetime',
        expression: '[lsi_wind_combined.leak_start_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    resolution_datetime: createDateDimension({
        name: 'resolution_datetime',
        expression: '[lsi_wind_combined.resolution_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    scheduled_repair_datetime: createDateDimension({
        name: 'scheduled_repair_datetime',
        expression: '[lsi_wind_combined.scheduled_repair_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[lsi_wind_combined.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    xfer_datetime: createDateDimension({
        name: 'xfer_datetime',
        expression: '[lsi_wind_combined.xfer_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as lsi_wind_combinedDimension;

interface mtuserDimension extends Dimension {
    api_key: Attribute;
    customer_uuid: Attribute;
    email_id: Attribute;
    first_name: Attribute;
    inserted_by: Attribute;
    is_mfa_otp: Attribute;
    last_name: Attribute;
    okta_user_id: Attribute;
    one_time_password: Attribute;
    password: Attribute;
    status: Attribute;
    updated_by: Attribute;
    user_permission: Attribute;
    username: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    lastlogin_datetime: DateDimension;
    one_time_password_expires: DateDimension;
    status_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const mtuser = createDimension({
    name: 'mtuser',
    api_key: createAttribute({
        name: 'api_key',
        type: 'text-attribute',
        expression: '[mtuser.api_key]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    customer_uuid: createAttribute({
        name: 'customer_uuid',
        type: 'text-attribute',
        expression: '[mtuser.customer_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    email_id: createAttribute({
        name: 'email_id',
        type: 'text-attribute',
        expression: '[mtuser.email_id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    first_name: createAttribute({
        name: 'first_name',
        type: 'text-attribute',
        expression: '[mtuser.first_name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[mtuser.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    is_mfa_otp: createAttribute({
        name: 'is_mfa_otp',
        type: 'text-attribute',
        expression: '[mtuser.is_mfa_otp]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    last_name: createAttribute({
        name: 'last_name',
        type: 'text-attribute',
        expression: '[mtuser.last_name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    okta_user_id: createAttribute({
        name: 'okta_user_id',
        type: 'text-attribute',
        expression: '[mtuser.okta_user_id]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    one_time_password: createAttribute({
        name: 'one_time_password',
        type: 'numeric-attribute',
        expression: '[mtuser.one_time_password]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    password: createAttribute({
        name: 'password',
        type: 'text-attribute',
        expression: '[mtuser.password]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[mtuser.status]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[mtuser.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    user_permission: createAttribute({
        name: 'user_permission',
        type: 'text-attribute',
        expression: '[mtuser.user_permission]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    username: createAttribute({
        name: 'username',
        type: 'text-attribute',
        expression: '[mtuser.username]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[mtuser.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[mtuser.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lastlogin_datetime: createDateDimension({
        name: 'lastlogin_datetime',
        expression: '[mtuser.lastlogin_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    one_time_password_expires: createDateDimension({
        name: 'one_time_password_expires',
        expression: '[mtuser.one_time_password_expires (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    status_datetime: createDateDimension({
        name: 'status_datetime',
        expression: '[mtuser.status_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[mtuser.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as mtuserDimension;

interface sectionDimension extends Dimension {
    desc: Attribute;
    inserted_by: Attribute;
    interval: Attribute;
    is_enabled: Attribute;
    lat: Attribute;
    lon: Attribute;
    lsi_param: Attribute;
    section_name: Attribute;
    run_uuid: Attribute;
    site_uuid: Attribute;
    section_type: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const section = createDimension({
    name: 'section',
    desc: createAttribute({
        name: 'desc',
        type: 'text-attribute',
        expression: '[section.desc]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[section.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    interval: createAttribute({
        name: 'interval',
        type: 'numeric-attribute',
        expression: '[section.interval]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    is_enabled: createAttribute({
        name: 'is_enabled',
        type: 'numeric-attribute',
        expression: '[section.is_enabled]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[section.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[section.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lsi_param: createAttribute({
        name: 'lsi_param',
        type: 'text-attribute',
        expression: '[section.lsi_param]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_name: createAttribute({
        name: '[section.name]',
        type: 'text-attribute',
        expression: '[section.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    run_uuid: createAttribute({
        name: 'run_uuid',
        type: 'text-attribute',
        expression: '[section.run_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_uuid: createAttribute({
        name: 'site_uuid',
        type: 'text-attribute',
        expression: '[section.site_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_type: createAttribute({
        name: '[section.type]',
        type: 'text-attribute',
        expression: '[section.type]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[section.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[section.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[section.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[section.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as sectionDimension;

interface section_anemometerDimension extends Dimension {
    anemometer_uuid: Attribute;
    inserted_by: Attribute;
    section_uuid: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const section_anemometer = createDimension({
    name: 'section_anemometer',
    anemometer_uuid: createAttribute({
        name: 'anemometer_uuid',
        type: 'text-attribute',
        expression: '[section_anemometer.anemometer_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[section_anemometer.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_uuid: createAttribute({
        name: 'section_uuid',
        type: 'text-attribute',
        expression: '[section_anemometer.section_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[section_anemometer.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[section_anemometer.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[section_anemometer.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[section_anemometer.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as section_anemometerDimension;

interface section_endpointDimension extends Dimension {
    endpoint_uuid: Attribute;
    inserted_by: Attribute;
    section_uuid: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const section_endpoint = createDimension({
    name: 'section_endpoint',
    endpoint_uuid: createAttribute({
        name: 'endpoint_uuid',
        type: 'text-attribute',
        expression: '[section_endpoint.endpoint_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[section_endpoint.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    section_uuid: createAttribute({
        name: 'section_uuid',
        type: 'text-attribute',
        expression: '[section_endpoint.section_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[section_endpoint.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[section_endpoint.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[section_endpoint.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[section_endpoint.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as section_endpointDimension;

interface siteDimension extends Dimension {
    customer_uuid: Attribute;
    desc: Attribute;
    inserted_by: Attribute;
    lat: Attribute;
    leak_rate_high: Attribute;
    leak_rate_low: Attribute;
    leak_rate_mid: Attribute;
    leak_rate_superemitter: Attribute;
    leak_total_high: Attribute;
    leak_total_low: Attribute;
    leak_total_mid: Attribute;
    leak_total_superemitter: Attribute;
    lon: Attribute;
    site_name: Attribute;
    status: Attribute;
    timezone: Attribute;
    site_type: Attribute;
    updated_by: Attribute;
    uuid: Attribute;
    insert_datetime: DateDimension;
    update_datetime: DateDimension;
}
export const site = createDimension({
    name: 'site',
    customer_uuid: createAttribute({
        name: 'customer_uuid',
        type: 'text-attribute',
        expression: '[site.customer_uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    desc: createAttribute({
        name: 'desc',
        type: 'text-attribute',
        expression: '[site.desc]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    inserted_by: createAttribute({
        name: 'inserted_by',
        type: 'text-attribute',
        expression: '[site.inserted_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lat: createAttribute({
        name: 'lat',
        type: 'numeric-attribute',
        expression: '[site.lat]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate_high: createAttribute({
        name: 'leak_rate_high',
        type: 'numeric-attribute',
        expression: '[site.leak_rate_high]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate_low: createAttribute({
        name: 'leak_rate_low',
        type: 'numeric-attribute',
        expression: '[site.leak_rate_low]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate_mid: createAttribute({
        name: 'leak_rate_mid',
        type: 'numeric-attribute',
        expression: '[site.leak_rate_mid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_rate_superemitter: createAttribute({
        name: 'leak_rate_superemitter',
        type: 'numeric-attribute',
        expression: '[site.leak_rate_superemitter]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_total_high: createAttribute({
        name: 'leak_total_high',
        type: 'numeric-attribute',
        expression: '[site.leak_total_high]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_total_low: createAttribute({
        name: 'leak_total_low',
        type: 'numeric-attribute',
        expression: '[site.leak_total_low]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_total_mid: createAttribute({
        name: 'leak_total_mid',
        type: 'numeric-attribute',
        expression: '[site.leak_total_mid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    leak_total_superemitter: createAttribute({
        name: 'leak_total_superemitter',
        type: 'numeric-attribute',
        expression: '[site.leak_total_superemitter]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    lon: createAttribute({
        name: 'lon',
        type: 'numeric-attribute',
        expression: '[site.lon]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_name: createAttribute({
        name: '[site.name]',
        type: 'text-attribute',
        expression: '[site.name]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[site.status]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    timezone: createAttribute({
        name: 'timezone',
        type: 'text-attribute',
        expression: '[site.timezone]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    site_type: createAttribute({
        name: '[site.type]',
        type: 'text-attribute',
        expression: '[site.type]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    updated_by: createAttribute({
        name: 'updated_by',
        type: 'text-attribute',
        expression: '[site.updated_by]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    uuid: createAttribute({
        name: 'uuid',
        type: 'text-attribute',
        expression: '[site.uuid]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    insert_datetime: createDateDimension({
        name: 'insert_datetime',
        expression: '[site.insert_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
    update_datetime: createDateDimension({
        name: 'update_datetime',
        expression: '[site.update_datetime (Calendar)]',
        dataSource: { title: 'Customer (1)', live: true },
    }),
}) as siteDimension;
