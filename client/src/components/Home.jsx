import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/logo.png"
const Home = ({ ratio }) => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animationClientCount = () => {
        animate(0, 10, {
            duration: 3,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    };

    const animationProjectsCount = () => {
        animate(0, 20, {
            duration: 3,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    };



    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opecity: 0,
            },
            whileInView: {
                x: 0,
                opecity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opecity: 0,
            },
            whileInView: {
                y: 0,
                opecity: 1,
            },
        },
    }
    return (
        <div id="home">
            <section>
                <div>

                    <motion.h1 {...animations.h1}
                    >
                        <span style={{
                            color: "skyblue"
                        }}>Hi,</span>   I Am <br /> <span style={{
                            color: 'skyblue'
                        }}> Himanshu</span>  Singh
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }} />
                    <div>
                        <a href="mailto:avrockhimanshu007@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work"> Projects   <BsArrowUpRight /></a>

                    </div>
                    <article>
                        <p>
                            +
                            {
                                (<motion.span whileInView={animationClientCount} ref={clientCount}>

                                </motion.span>

                                )}

                        </p>
                        <span>
                            Clients Worldwide
                        </span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +
                                {
                                    (<motion.span whileInView={animationProjectsCount} ref={projectCount}>
                                        500
                                    </motion.span>

                                    )}

                            </p>
                            <span>
                                Project Done
                            </span>

                        </article>

                        <article data-special>
                            <p> Contect
                            </p>
                            <span>
                                avrockhimanshu007@gmail.com
                            </span>
                        </article>
                    </aside>
                </div>
            </section>


            <section>
                <img src={me} alt="Himanshu" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home