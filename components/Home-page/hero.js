import classes from "./hero.module.css";
import Image from "next/image";


function Hero(){
return(
    <section className={classes.hero}>
        <div className={classes.image}>
        <Image src="/images/anmol.jpg" alt="" width={300} height={300}></Image>
        </div>
        <h1> Hello, I'm Anmol <span>Sharma</span></h1>
        <p>This is my personal blog created for keeping account of animes watched by me . BTW ,I am frontend web developer .</p>
    </section>
)
}
export default Hero;