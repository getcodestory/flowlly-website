import React from "react";
import check_in from '../img/check-in.svg'
import notifications from '../img/notifications.svg'
import desktop from '../img/desktop.svg'


const Content = () => {
  return (
    <div className="border-l border-white  ml-20 mt-48 pl-4 text-white font-league flex flex-col">
      <div className="pt-4 min-h-[650px] w-2/5">
        <h1 className="text-6xl font-bold mb-4">
          Field communication tool that works for you
        </h1>
        <p className="text-3xl">
          Automatically turn SMS’s, Whatsapp conversations and Phone Calls into
          actionable data
        </p>
      </div>
          <h1 className="text-6xl font-bold mb-4 w-[55%]">
          Keep subs informed and projects on track
          </h1>
      <div className="min-h-[832px]">
        <div>
        </div>
        <div className="mt-20 flex flex-row items-center">
          <div className="w-2/5 text-2xl">
            <p className="font-semibold">CHECK-IN & CHECK-OUT WORKFLOWS</p>
            <p className="mt-6">Our automated system instantly notifies subcontractors about their daily tasks upon arrival on site, eliminating manual efforts and maximizing efficiency. Additionally, it prompts them to submit progress reports as they depart, ensuring real-time updates and seamless project monitoring.</p>
          </div>
          <div className="w-3/5 flex justify-center">
            <img src={check_in} alt="check-in"/>
          </div>
        </div>
      </div>
      <div className="min-h-[832px]">
        <div className="mt-20 flex flex-row items-center">
          <div className="w-2/5 text-2xl">
            <p className="font-semibold">AUTOMATED ALERTS AND NOTIFICATIONS</p>
            <p className="mt-6">Our system alerts and notifies subcontractors instantly about any changes, updates, or critical information that may impact their tasks or the overall progress of the project.</p>
          </div>
          <div className="w-3/5 flex justify-center">
            <img src={notifications} alt="notifications"/>
          </div>
        </div>
      </div>
      <div className="min-h-[832px]">
        <div className="mt-20 flex flex-row items-center">
          <div className="w-2/5 text-2xl">
            <p className="font-semibold">EARLY DISRUPTION DETECTION AND TASKS</p>
            <p className="mt-6">Our AI system automatically detects anomalies and key tasks from messages and audio, promptly flagging them to project managers.</p>
          </div>
          <div className="w-3/5 flex justify-center">
            <img src={desktop} alt="tasks and alerts" className="w-[80%]"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Content;
