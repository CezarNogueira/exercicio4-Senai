import React from "react";
import { useState } from "react";
import "./css/Chamada_module.css";

function Chamada () {
    const [local, setLocal] = useState('');
    const [problema, setProblema] = useState('');
    const [data, setData] = useState('');
    const [autor, setAutor] = useState('');
    const [call, setCall] = useState([]);

    const createCall = () => {
        if (local, problema, data, autor !== '') {
            setCall ([...call, { local: local, problema: problema, data: data, autor: autor}]);
            setLocal ('');
            setProblema ('');
            setData ('');
            setAutor ('');
        };
    };

    const clearCall = () => {
        setCall ([]);
    };

    return (
            <div className="flex__wrapper__chamada">

                <ol>
                    <div className="call_wrapper">

                        <div className="call_box">
                            {call.map((call, index) => (
                            <div className="call">

                                <div className="call_local">
                                    {call.local}
                                </div>

                                <div className="call_problema">
                                    {call.problema} 
                                </div>

                                <div className="call_data">
                                    {call.data}
                                </div>

                                <div className="call_autor">
                                    {call.autor}
                                </div>

                            </div>
                            ))}
                        </div>
                        
                    </div>
                </ol>
                
                <div className="input_wrapper">
                    <div className="input__wrapper__form">
                        <p>LOCAL</p>
                        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required/>
                    </div>
                    <div className="input__wrapper__form">
                        <p>PROBLEMA</p>
                        <input type="text" value={problema} onChange={(e) => setProblema(e.target.value)} required/>
                    </div>
                    <div className="input__wrapper__form">
                        <p>DATA</p>
                        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required/>
                    </div>
                    <div className="input__wrapper__form">
                        <p>AUTOR</p>
                        <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required/>
                    </div>
                    <div className="button_wrapper">
                        <button onClick={createCall}>CHAMADA</button>
                        <button onClick={clearCall}>LIMPAR</button>
                    </div>
                </div> 
                      
            </div>
    );
};

export default Chamada;