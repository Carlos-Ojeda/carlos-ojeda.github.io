import React from 'react';
import { PageHeader, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const items = [
    { label:<a href='/#about-me'>About Me</a>, key: '1' },
    { label:<a href='/#projects'>Projects</a>, key: '2' },
    { label:<a href='/#skills'>Skills</a>, key: '3' },
    { label:<a href='/#contact'>Contact</a>, key: '4' }
];

function Header() {
    return (
        
        <>
            <PageHeader
                className="site-page-header"
                title={<a style={{color:"black"}}key="0" href='/#landing'>Carlos Ojeda</a>}
                extra={[
                    <Menu 
                    className="header-menu"
                    key="0.0"
                    items={items} 
                    overflowedIndicator={<MenuOutlined />} 
                    selectable={false} 
                    mode="horizontal" />
                ]}
                avatar={{
                    src: 'https://avatars.githubusercontent.com/u/71744365?v=4',
                    size: 'large'
                }}
            />
        </>
        
    );
  }
  
  export default Header;