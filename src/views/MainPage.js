import React from "react";

import CreditAdvisor from "../components/CreditAdvisor";
import TipologiaTasso from "../components/Sezione_SceltaTipoligia";
import Mutui from "../components/Sezione_OpzioniMutui";
import Recap from "../components/Sezione_Recap";

function MainPage() {
  var clientName = "Mario";

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-4 lg:w-9/12 md:w-full mx-auto my-10">
        <div className="leftSidePanel">
          {/* AGENT CARD */}
          <div className="col-span-1 sm:col-span-1 rounded-md shadow fj-border-f bg-white">
            <div className="AdvisorSpace p-4">
              <CreditAdvisor
                clientName={clientName}
                agentName="Farhaan"
                numReviews={54}
                stars={5}
              />
            </div>

            {/* FOOTER AGENT CARD */}
            <div className="bg-white fj-border-t rounded-b-md">
              <div className="p-5">
                <button class="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg w-full h-12">
                  <span className="text-center font-medium">
                    MOSTRAMI I MUTUI
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* DOWNLOAD APPSTORE - GOOGLE PLAY STORE */}
          <div className="flex justify-items-center justify-center items-center my-5">
            <div class="flex m-3 w-40 h-12 bg-black text-white rounded-md items-center justify-center">
              <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div class="text-[10px]">Scarica su</div>
                <div class="text-base font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>

            <div class="flex m-3 w-40 h-12 bg-black text-white rounded-md items-center justify-center">
              <div class="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  />
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  />
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  />
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  />
                </svg>
              </div>
              <div>
                <div class="text-[10px]">DISPONIBILE SU</div>
                <div class="text-base font-semibold font-sans -mt-1">
                  Google Play
                </div>
              </div>
            </div>
          </div>
          {/* TRUSTPILOT REVIEW */}
          <div className="flex justify-center items-center mt-2 text-[12px]">
            <p className="mr-2">Eccezionale 4.7 su 5</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/512px-Trustpilot_Logo_%282022%29.svg.png"
              className="w-24"
            />
          </div>
        </div>
        <div className="rightSidePanel col-span-2 sm:col-span-2">
          <div className="shadow fj-border-f bg-white rounded-md p-4 mb-5">
            <TipologiaTasso />
          </div>

          <div className="shadow fj-border-f bg-white rounded-md p-4 mb-5">
            <Mutui clientName={clientName} />
          </div>

          <div className="shadow fj-border-f bg-white rounded-md p-4 mb-5">
            <Recap progress={2} />
          </div>

          <div className="mx-20 text-center text-xs text-gray-500">
            <p>
              Il risultato della stima è indicativo. Il tasso indicato corrisponde al tasso più basso tra i prodotti di mutuo delle banche convenzionate di Mutuiamo s.r.l. I dati finanziari effettivi saranno confermati dai singoli istituti di credito al momento della stipula. Questa stima non ha nessun valore ai fini della concessione del mutuo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
