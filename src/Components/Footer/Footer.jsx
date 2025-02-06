const Footer = () => {
    return (
        <>
            <div className="divider border-t border-gray-400"></div>
            <footer className="footer footer-center text-base-content pb-4 pt-2">
                <aside>
                    <p className="text-gray-400">
                        Copyright © {new Date().getFullYear()} - All rights reserved by Istiak Ahamed
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;