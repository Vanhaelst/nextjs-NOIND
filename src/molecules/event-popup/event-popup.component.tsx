import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const showedPopup = localStorage.getItem("showedPopup");
    const today = new Date().toDateString();
    if (today !== showedPopup && !closed) {
      const delay = router.asPath === "/" ? 1000 : 5000;
      setTimeout(() => {
        setOpen(true);
      }, delay);
    }
  }, [closed, router.asPath]);

  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    localStorage.setItem("showedPopup", new Date().toDateString());
    setOpen(false);
    setClosed(true);
  };
  const handleClick = () => {
    localStorage.setItem("showedPopup", new Date().toDateString());
    setOpen(false);
    setClosed(true);
    window.open(
      "https://www.kletz.be/events/noind-fantastische-vrijdagen",
      "_blank",
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1500]"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div
                  className="ralative h-[300px] w-full bg-gray-50 bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://www.kletz.be/images/workshop-vr-ideation.jpg")',
                  }}
                >
                  <button
                    type="button"
                    className="absolute right-4 top-4 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="h-8 w-8"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900 font-bebas"
                      >
                        NOIND fantastische vrijdag(en)!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-black font-plex">
                          Samen verbeelden, verbeelding omzetten in een
                          ruimtelijk ontwerp, het ontwerp zien evolueren tot een
                          knap interieur? De werkelijkheid beleven in een
                          virtuele omgeving, een bezoekje brengen aan een échte
                          oneindige virtuele toonzaal, het NOIND-universum leren
                          kennen? Materialen ontdekken, texturen voelen, echte
                          mensen van vlees en bloed ontmoeten?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="font-plex inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 sm:ml-3 sm:w-auto"
                    onClick={handleClick}
                  >
                    Meer info
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
