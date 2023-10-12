import React from 'react'
import Navigation from '../base/Navigation'
import Footer from '../base/Footer'
import styles from  './styles.module.scss'

export default function Home() {
    return (
        <>
            <header>
                <h1>Mario club</h1>
            </header>
            <section className={styles.banner}>
                <img src="/mario-banner.png" alt="mario banner" />
                <div className={styles.welcome}>
                    <h2>Welcome to <br/><span>Mario Club</span></h2>
                </div>
            </section>
            <nav className={styles.mainNav}>
                <Navigation />
            </nav>
            <main>
                <article>
                    <h2>Its me, Mario</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ad ullam odio ex, fuga a incidunt provident voluptatem delectus nulla voluptates id. Molestiae itaque quos ea illo cumque laborum ipsam.
                    </p>
                </article>
                <ul className={styles.image}>
                    <li><img src="/thumb-1.jpg" alt="thumb 1" /></li>
                    <li><img src="/thumb-2.jpg" alt="thumb 2" /></li>
                </ul>
            </main>
            <section className={styles.join}>
                <h2>Join today</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure hic illo nostrum laboriosam perspiciatis numquam soluta eaque obcaecati ipsa, temporibus in laudantium, totam sapiente sit, excepturi recusandae ut officia? lorem</p>
                <form >
                    <input type="email" name='email' placeholder='Type email and hit enter' required />
                </form>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
