import React, { useState } from 'react';
import "./styles.css";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import TaskFlowIcon from '../icons/TaskFlowIcon'
import ActivityIcon from '../icons/ActivityIcon';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import CalendarIcon from '../icons/CalendarIcon';
import OverviewIcon from '../icons/OverviewIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import LineIcon from '../icons/LineIcon';
import Cloth from '../icons/images/cloth.png';
import Flower from '../icons/images/flower.png';
import Gamer from '../icons/images/gamer.png';
import { Link } from 'react-router-dom';
import ManageIcon from '../icons/ManageIcon';
import IntegrateIcon from '../icons/IntegrateIcon';
import InvestIcon from '../icons/InvestIcon';
import AdvertiseIcon from '../icons/AdvertiseIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const Desktop1 = () => {


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='mt-6'>
            <Sidebar className='sidebar' collapsed={collapsed}>
                <Menu>
                    <div className='w-full' style={{ color: '#9896A3' }}>
                        <MenuItem icon={<TaskFlowIcon />} onClick={handleToggleSidebar} >
                            <p style={{ fontSize: '24px', fontWeight: 500, color: '#000', marginLeft: '10px' }}>TaskFlow</p>
                        </MenuItem>


                        <button class="accordion w-full flex flex-row gap-4"> <MenuItem icon={<OverviewIcon />}>Overview <ExpandMoreIcon /></MenuItem></button>
                        <div class="panel">
                            <MenuItem icon={<CalendarIcon />}>Calendar</MenuItem>
                            <MenuItem icon={<AnalyticsIcon />}>Analytics</MenuItem>
                            <MenuItem icon={<ActivityIcon />}>Activity</MenuItem>
                            <MenuItem icon={<ProjectsIcon />}>Projects</MenuItem>
                           </div>



                        <div className='flex w-full mt-4 justify-center'>
                            <LineIcon />
                        </div>
                        <MenuItem icon={<img src={Flower} />}>Flower Shop</MenuItem>
                        <MenuItem icon={<img src={Cloth} />}>Cloth</MenuItem>
                        <MenuItem icon={<img src={Gamer} />}>Gamer Boy</MenuItem>
                        <div className='flex w-full mt-4 justify-center'>
                            <LineIcon />
                        </div>

                        <MenuItem icon={<ManageIcon />}>Manage Finances</MenuItem>
                        <MenuItem icon={<IntegrateIcon />}>Integrate ChatGPT</MenuItem>
                        <MenuItem icon={<AdvertiseIcon />}>Advertise Website</MenuItem>
                        <MenuItem icon={<InvestIcon />}>Invest in DOGE</MenuItem>
                    </div>
                </Menu>

            </Sidebar>
        </div>
    )
}

export default Desktop1