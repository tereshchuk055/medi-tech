type PopUpType = {
    text: string;
  };

export default function PopUp({text}: PopUpType) {
    return (
        <div id="popup-modal" className=" md:inset-0 max-h-full">
            <div className="absolute bottom-0 right-0 p-5 w-full max-w-md max-h-full">
                <div className="relative  rounded-lg shadow bg-red-700">
                    <button type="button" className="absolute top-3 right-2.5 text-neutral-100 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <svg className="mx-auto mb-4 text-neutral-100 w-12 h-12 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-neutral-100">Unexpected error!{text}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
