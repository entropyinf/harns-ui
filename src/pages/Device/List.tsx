import React, { useState, type JSX } from 'react';
import styled from 'styled-components';

const deviceData = [
  {
    key: '1',
    modbusName: 'Modbus 主设备1',
    deviceType: 'Modbus 总控器',
    connectionStatus: '在线',
    ipAddress: '192.168.1.1',
    lastConnectionTime: '2024-07-01 10:00:00',
    installationLocation: '办公室 A',
    port: 502,
    protocolVersion: 'RTU',
    children: [
      {
        key: '1-1',
        modbusName: 'Modbus 子设备1-1',
        deviceType: 'Modbus 传感器',
        connectionStatus: '在线',
        ipAddress: '192.168.1.101',
        lastConnectionTime: '2024-07-01 10:10:00',
        installationLocation: '办公室 A 角落',
        port: 503,
        protocolVersion: 'TCP',
      },
    ],
  },
  {
    key: '2',
    modbusName: 'Modbus 主设备2',
    deviceType: 'Modbus 网关',
    connectionStatus: '离线',
    ipAddress: '192.168.1.2',
    lastConnectionTime: '2024-07-01 09:00:00',
    installationLocation: '数据中心',
    port: 504,
    protocolVersion: 'TCP',
    children: [
      {
        key: '2-1',
        modbusName: 'Modbus 子设备2-1',
        deviceType: 'Modbus 执行器',
        connectionStatus: '离线',
        ipAddress: '192.168.1.102',
        lastConnectionTime: '2024-07-01 09:10:00',
        installationLocation: '数据中心机柜',
        port: 505,
        protocolVersion: 'RTU',
      },
    ],
  },
];

// 优化后的样式组件，让单元格更紧凑
const TableContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #f0f2f5;
  font-weight: 600;
  color: #262626;
`;

const TableRow = styled.div`
  display: flex;
  border-top: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

// 减少内边距让单元格更紧凑
const TableCell = styled.div`
  padding: 8px; 
  flex: 1;
  border-right: 1px solid #f0f0f0;
  font-size: 14px;
  color: #595959;

  &:last-child {
    border-right: none;
  }
`;

const ExpandIcon = styled.span`
  margin-right: 8px;
  cursor: pointer;
`;

const renderTree = (data: any[], expandedKeys: string[], expand: (key: string) => void, depth = 0) => {
  return data.map((device): JSX.Element => (
    <>
      <TableRow key={device.key} onClick={() => expand(device.key)}>
        <TableCell>
          {device.children && (
            <ExpandIcon>
              {expandedKeys.includes(device.key) ? '▼' : '▶'}
            </ExpandIcon>
          )}
          {Array(depth).fill(<span style={{ marginRight: 8 }} />)}
          {device.modbusName}
        </TableCell>
        <TableCell>{device.deviceType}</TableCell>
        <TableCell>{device.connectionStatus}</TableCell>
        <TableCell>{device.ipAddress}</TableCell>
        <TableCell>{device.lastConnectionTime}</TableCell>
        <TableCell>{device.installationLocation}</TableCell>
        <TableCell>{device.port}</TableCell>
        <TableCell>{device.protocolVersion}</TableCell>
      </TableRow>
      {expandedKeys.includes(device.key) && device.children && renderTree(device.children, expandedKeys, expand, depth + 1)}
    </>
  ));
};

const List: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const toggleExpand = (key: string) => {
    if (expandedKeys.includes(key)) {
      setExpandedKeys(expandedKeys.filter((k) => k !== key));
    } else {
      setExpandedKeys([...expandedKeys, key]);
    }
  };

  return (
    <>
      <TableContainer>
        <TableHeader>
          <TableCell>Modbus 设备名称</TableCell>
          <TableCell>设备类型</TableCell>
          <TableCell>连接状态</TableCell>
          <TableCell>IP 地址</TableCell>
          <TableCell>最后连接时间</TableCell>
          <TableCell>安装位置</TableCell>
          <TableCell>端口</TableCell>
          <TableCell>协议版本</TableCell>
        </TableHeader>
        {renderTree(deviceData, expandedKeys, toggleExpand)}
      </TableContainer>
    </>
  );
};

export default List;