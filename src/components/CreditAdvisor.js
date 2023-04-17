import React from "react";

function CreditAdvisor({ clientName, agentName, numReviews, stars }) {

    var starsInt = Math.floor(stars);

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-5">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGwQJw73JvtwQ/profile-displayphoto-shrink_200_200/0/1673556551996?e=1687392000&v=beta&t=3YqNl_DIEiNL-zJwEZLbTAejjKO1wmtoLnx7hBRktM0"
          alt={agentName}
          className="w-24 h-24 rounded-full my-2"
        />
        <div className="text-center text-xl font-bold text-gray-800 my-2">
            <h2>Ciao {clientName}! Sono {agentName},</h2>
            <h2>il tuo Credit Advisor Mutuiamo</h2>
        </div>    

        <div className="flex items-center my-3">
          {[...Array(starsInt)].map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 fill-current text-yellow-500 ml-1"
              viewBox="0 0 20 20"
            >
              <path d="M10 0l2.94 6.364 6.566.954-4.75 4.595 1.406 6.499-5.162-3.046L3.25 18.91l1.406-6.5L0.5 7.318l6.566-.953z" />
            </svg>
          ))}
          <span className="text-gray-500 text-sm ml-2">
            {stars.toFixed(1)} | {numReviews} recensioni
          </span>
        </div>

        <div className="text-base text-gray-600 mt-2 mb-1 text-center">
            <p>In base alle informazioni che hai fornito,</p>
            <p>ecco la tua stima: </p>
        </div>
      </div>
    </div>
  );
}

export default CreditAdvisor;
