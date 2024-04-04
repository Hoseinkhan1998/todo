import React, { useState, useEffect } from "react";
import TodoIcon from '../icons/TodoIcon';
import PlusIcon from '../icons/PlusIcon';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const RightMenu = () => {

    const [strikeThroughCSS, setStrikeThroughCSS] =
        useState(false);

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])

    const addTask = (e) => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task };
            setTasks([...tasks, newTask]);
            localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
            setTask("");
        }
    }

    const handleDelete = (task) => {
        const deleted = tasks.filter((t) => t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }


    const { valueParam } = useParams();


    const [state, setState] = React.useState({ bottom: false });

    const toggleDrawer = (side, open) => event =>
        setState({ ...state, [side]: open });


    return (
        <div style={{ width: '20%', marginTop: '30px', padding: '0px 40px' }}>
            <div className='flex w-full flex-col'>
                <div className='w-full flex flex-row justify-between'>
                    <div className='flex flex-row gap-1'>
                        <TodoIcon />
                        <p style={{ color: '#56555C', fontSize: '16px', fontWeight: 500, textDecorationLine: 'underline' }}>Todos</p>
                    </div>
                    <button onClick={toggleDrawer('bottom', true)}>
                        <PlusIcon />
                    </button>
                </div>

                {tasks.map((task) => (
                    <React.Fragment key={task.id}>
                        <div className="w-full flex flex-col mt-4 gap-1 rounded-xl" style={{ border: '1px solid #E6E4F0', padding: '10px' }}>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-2">
                                    <input type="checkbox" onClick={() =>
                                        setStrikeThroughCSS((prev) => !prev)} />
                                    <p style={{
                                        fontSize: '14px', color: 'rgba(85, 119, 255, 0.80)', fontWeight: 500,
                                        textDecoration: strikeThroughCSS ?
                                            "line-through" : "none"
                                    }}>{task.title}</p>
                                </div>
                                <button onClick={() => handleDelete(task)}> <DeleteForeverIcon /> </button>

                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="flex justify-center items-center rounded-3xl"
                                    style={{ background: 'rgba(255, 200, 0, 0.30)', color: 'rgba(255, 200, 0, 1)', padding: '2px 8px' }}>
                                    <p style={{ fontSize: '12px' }}> Donations </p>
                                </div>
                                <div className="flex justify-center items-center rounded-3xl"
                                    style={{ background: 'rgba(0, 184, 132, 0.30)', color: 'rgba(0, 184, 132, 1)', padding: '2px 8px' }}>
                                    <p style={{ fontSize: '12px' }}> Social </p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <SwipeableDrawer
                    // sx={{ borderRadius: '50px' }}
                    anchor="bottom"
                    open={state.bottom}
                    onClose={toggleDrawer('bottom', false)}
                    onOpen={toggleDrawer('bottom', true)}
                    PaperProps={{ elevation: 0, style: { borderRadius: '20px 20px 0px 0px', marginLeft: '80%' } }}

                >
                    <div className="w-full flex flex-col mt-6 mb-20" style={{ padding: '0% 10%' }}>
                        <div className="flex flex-row gap-3">
                            <input name="task"
                                type="text"
                                value={task}
                                style={{ border: '2px solid rgb(113 121 153)' }}
                                placeholder="Write your task..."
                                className="w-full rounded-lg"
                                onChange={(e) => setTask(e.target.value)} />
                            <button onClick={addTask} style={{ backgroundColor: '#b2b2f7', padding: '10px', borderRadius: '10px' }}>
                                <AddIcon />
                            </button>
                        </div>
                        <div>
                            You have
                            {!tasks.length
                                ? " no tasks"
                                : tasks.length === 1
                                    ? " 1 task"
                                    : tasks.length > 1
                                        ? ` ${tasks.length} tasks`
                                        : null}
                        </div>
                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    )
}

export default RightMenu