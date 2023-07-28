import React, { useState } from "react";
import "./login.css"

export const Login = () => {
    const [isGx, setIsGx] = useState(false);
    const [isTxr, setIsTxr] = useState(false);
    const [isHiddenC1, setIsHiddenC1] = useState(false);
    const [isHiddenC2, setIsHiddenC2] = useState(true);
    const [isTxl, setIsTxl] = useState(false);
    const [isZ, setIsZ] = useState(false);

    const changeForm = () => {
        // 修改状态
        setIsGx(true);
        setTimeout(function () {
            setIsGx(false);
        }, 1500);

        setIsTxr((prev) => !prev);
        setIsHiddenC1((prev) => !prev);
        setIsHiddenC2((prev) => !prev);
        setIsTxl((prev) => !prev);
        setIsZ((prev) => !prev);
    };


    return (
        <section className="login">
            <ul className="squares">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="shell">
                <div id="a-container" className={`container a-container ${isTxl ? "is-txl" : ""}`}>
                    <form action="" method="" className="form" id="a-form">
                        <h2 className="form_title title">创建账号</h2>
                        <input type="text" className="form_input" placeholder="用户名"></input>
                        <input type="text" className="form_input" placeholder="手机号/邮箱"></input>
                        <input type="text" className="form_input" placeholder="密码"></input>
                        <button className={`form_button button submit ${isGx ? "is-gx" : ""}`}>注册</button>
                    </form>
                </div>

                <div id="b-container" className={`container b-container ${isTxl ? "is-txl" : ""} ${isZ ? "is-z" : ""}`} >
                    <form action="" method="" className="form" id="b-form">
                        <h2 className="form_title title">登录账号</h2>
                        <input type="text" className="form_input" placeholder="手机号/邮箱"></input>
                        <input type="text" className="form_input" placeholder="密码"></input>
                        <button className={`form_button button submit ${isGx ? "is-gx" : ""}`}>登录</button>
                    </form>
                </div>

                <div className={`switch ${isTxr ? "is-txr" : ""}`} id="switch-cnt">
                    <div className={`switch_circle ${isTxr ? "is-txr" : ""}`}></div>
                    <div className={`switch_circle switch_circle-t  ${isTxr ? "is-txr" : ""}`}></div>
                    <div className={`switch_container ${isHiddenC1 ? "is-hidden" : ""}`} id="switch-c1">
                        <h2 className="switch_title title">Welcome Back !</h2>
                        <p className="switch_description description">已有账号？去登录账号吧！</p>
                        <button className="switch_button button switch-btn" onClick={changeForm}>登录</button>
                    </div>

                    <div className={`switch_container ${isHiddenC2 ? "is-hidden" : ""}`} id="switch-c2">
                        <h2 className="switch_title title">Hello Friend !</h2>
                        <p className="switch_description description">去注册一个账号，开启编码之旅！</p>
                        <button className="switch_button button switch-btn" onClick={changeForm}>注册</button>
                    </div>
                </div>
            </div>
        </section>
    )
}