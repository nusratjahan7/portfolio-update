const Footer = () => {
    return (
        <footer className='bg-(--surface) border-t border-(--border) !py-10 !px-6 md:px-15 flex flex-col sm:flex-row sm:justify-between items-center gap-4'>
            <p className="font-serif text-[18px] font-bold text-white tracking-[-0.5px]">Nusrat<span className="text-(--accent)">.</span></p>
            <p className="text-[12px] text-(--muted) font-mono">&copy; {new Date().getFullYear()} Nusrat Jahan - Frontend Developer</p>
        </footer>
    );
};

export default Footer;