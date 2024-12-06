import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [

    {
        key: 'sub0',
        icon: <MailOutlined />,
        label: 'Services',
        
        children: [
          {
            
            key: '1-1',

            type: 'group',
            
            children: [
              {
                key: '1',
                label: '5G OSS, BSS & Automation Services',
                
                },
              {
                key: '2',
                label: 'OUR EXPERTISE',
              },
              {
                key: '3',
                label: 'MANAGED SERVICES',
              },
              {
                key: '4',
                label: 'INDUSTRY COMPLIANCE',
              },
            ],
          },
          

          {
            key: '1-1',
            style: {
                marginLeft:"300px",
                marginTop:"-200px"
            },
            type: 'group',
            children: [
                {
                    key: '6',
                    label: 'Cloud Services',
                    },

              {
                key: '5',
                label: 'Cloud Engineering and Automation',
                },

              {
                key: '6',
                label: 'DevOps',
              },
              {
                key: '7',
                label: 'Architecture Consulting',
              },
              
            ],
          },





          {
            key: '1-1',
            style: {
                marginLeft:"600px",
                marginTop:"-200px"
            },
            type: 'group',
            children: [
              {
                key: '8',
                label: 'Cyber Security Services',
                },
              {
                key: '9',
                label: 'Security Risk Assessment',
              },
              {
                key: '10',
                label: 'Securing Applications',
              },
              {
                key: '11',
                label: 'Security in Public and On-Prem Cloud',
              },
            ],
          },




          {
            key: '1-1',
            style: {
                marginLeft:"900px",
                marginTop:"-200px"
            },
            type: 'group',
            children: [
              {
                key: '12',
                label: 'Observability Solutions',
                },

              {
                key: '13',
                label: 'Multi-Vendor Integration',
              },
              {
                key: '14',
                label: 'Full Stack FCAPS Management',
              },
              {
                key: '15',
                label: 'Managed Observability Services',
              },
            ],
          },
        ]
      },


  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Products',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Option 1',
          },
          {
            key: '2',
            label: 'Option 2',
          },
        ],
      },
      {
        
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Option 3',
          },
          {
            key: '4',
            label: 'Option 4',
          },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'About Us',
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Careers',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
];

const Navbar = () => (
  <Menu
  style={{
    color:"white",
    fontSize:"20px",
    
  }}
  
    mode="horizontal"
    items={items}
  />
);
export default Navbar;