

const callButton = () => {
    return (
        <a
            href="tel:+918429345535"
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="relative flex items-center justify-center">

                {/* Ring animation */}
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-500 opacity-30 animate-ping"></span>

                {/* Phone icon */}
                <span className="relative text-4xl animate-bounce">
                    📞
                </span>

            </div>
        </a>
    );
}

export default callButton;