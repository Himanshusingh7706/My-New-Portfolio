import React from 'react'
import footer from "../assets/footer.jpg"
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={footer} alt="footer img" />
                <h2> Himanshu Singh</h2>
                <p> Success is not final; failure is not fatal: It is the courage to continue that counts. </p>

            </div>

            <aside>

                <h2> Social Media</h2>

                <article>
                    <a href="https://www.youtube.com/" target={"blank"}>
                        <AiFillYoutube /></a>

                    <a href="https://www.instagram.com/himanshusingh7748/" target={"blank"}>
                        <AiFillInstagram /></a>

                    <a href="https://github.com/Himanshusingh7706" target={"blank"}>
                        <AiFillGithub /></a>
                </article>
            </aside>
            <a href="#home"><AiOutlineArrowUp />
            </a>

        </footer>
    )
}

export default Footer