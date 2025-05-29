const Footer = () => {
    return(
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex 
            justify-between items-center flex-wrap gap-5
        ">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                
                    <a className="social-icon" target="_blank" rel="noreferrer" href="https://github.com/Bipul777-artist">
                        <img src="/assets/github.svg"
                        alt="GitHub" className="w-1/2 h-1/2"
                        />
                    </a>
                

                <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bipul-jha-4620ba180/">
                    <img src="/assets/linkedIn.png"
                     alt="LinkedIn" className="w-1/2 h-1/2"
                    />
                </a>
            </div>
            <p className="text-white-500">© 2025 Bipul. All rights reserved!</p>
        </section>
    )   
};

export default Footer;