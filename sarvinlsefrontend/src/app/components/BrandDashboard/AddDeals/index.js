"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DealTitle from "./DealTitle/index";
import BudgetDetails from "./BudgetDetails/index";
import CampaignDescription from "./CampaignDescription/index";
import DeliveryInformation from "./DeliveryInformation/index";
import InfluencerRequirement from "./InfluencerRequirement/index";
import TargetAudience from "./TargetAudience/index";
import TargetPlatform from "./TargetPlatform/index";
import TaskDescription from "./TaskDescription/index";

export default function Home({ openAddDealsModal, setOpenAddDealsModal }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dealTitle, setDealTitle] = useState("");
  const [biddingTo, setBiddingTo] = useState("");
  const [biddingFrom, setBiddingFrom] = useState("");
  const [fixedPriceValue, setFixedPriceValue] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [audienceTargetAge, setAudienceTargetAge] = useState("");
  const [audienceLocation, setAudienceLocation] = useState("");
  const [audienceReach, setAudienceReach] = useState("");
  const [audienceGender, setAudienceGender] = useState("");
  const [influencerSize, setInfluencerSize] = useState("");
  const [influencerCategory, setInfluencerCategory] = useState("");
  const [influencerAge, setInfluencerAge] = useState("");
  const [influencerLocation, setInfluencerLocation] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [category, setCategory] = useState([]);
  const [youtube, setYoutube] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    loading: false,
    error: "",
  });

  const handleSubmit = async (e) => {

    const addDealContent = {
      brand_id: null,
      product_name: dealTitle,
      product_description: null,
      product_photo: null,
      category: category.join(", "),
      promotion_type: null,
      sales_compensation: 7,
      created_by: null,
      campaign_description: campaignDescription,
      task_description: taskDescription,
      audience_location: audienceLocation,
      audience_target_number: audienceReach,
      audience_target_age: audienceTargetAge,
      audience_target_language: "Multiple languages",
      influencer_size: influencerSize,
      influencer_age: influencerAge,
      influencer_gender: audienceGender,
      sponsored_product: true,
      ...(fixedPriceValue === ""
        ? { bidding_price_from: biddingFrom, bidding_price_to: biddingTo }
        : { fixed_price: fixedPriceValue }),
    };

    console.log(addDealContent);

    setProgressBarWidth("100%");
    setLoginStatus({ loading: true, error: "" });

    try {
      const response = await axios.post(
        "/api/brand/deal",
        addDealContent,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setLoginStatus({ loading: false, error: "" });
      // Reset the form and progress bar after submission
      setDealTitle("");
      setBiddingTo("");
      setBiddingFrom("");
      setFixedPriceValue("");
      setCampaignDescription("");
      setAudienceTargetAge("");
      setAudienceLocation("");
      setAudienceReach("");
      setAudienceGender("");
      setInfluencerSize("");
      setInfluencerCategory("");
      setInfluencerAge("");
      setInfluencerLocation("");
      setTaskDescription("");
      setDeliveryLocation("");
      setDeliveryType("");
      setCategory([]);
      setCurrentStep(0); 
      setProgressBarWidth(steps[0].width);
      setOpenAddDealsModal(!openAddDealsModal);
    } catch (error) {
      setLoginStatus({ loading: false, error: error.message });
    }
  };

  useEffect(() => {
    const newCategories = [];
    if (youtube) newCategories.push("Youtube");
    if (instagram) newCategories.push("Instagram");
    setCategory(newCategories);
  }, [youtube, instagram, setCategory]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgressBarWidth(steps[currentStep + 1].width);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgressBarWidth(steps[currentStep - 1].width);
    }
  };

  const steps = [
    {
      component: <DealTitle key={0} dealTitle={dealTitle} setDealTitle={setDealTitle} handleNext={handleNext} />,
      width: "10%",
    },
    {
      component: (
        <TargetPlatform
          key={1}
          youtube={youtube}
          setYoutube={setYoutube}
          instagram={instagram}
          setInstagram={setInstagram}
          category={category}
          setCategory={setCategory}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "20%",
    },
    {
      component: (
        <CampaignDescription
          key={2}
          campaignDescription={campaignDescription}
          setCampaignDescription={setCampaignDescription}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "35%",
    },
    {
      component: (
        <TargetAudience
          key={3}
          audienceTargetAge={audienceTargetAge}
          setAudienceTargetAge={setAudienceTargetAge}
          audienceLocation={audienceLocation}
          setAudienceLocation={setAudienceLocation}
          audienceReach={audienceReach}
          setAudienceReach={setAudienceReach}
          audienceGender={audienceGender}
          setAudienceGender={setAudienceGender}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "45%",
    },
    {
      component: (
        <DeliveryInformation
          key={4}
          deliveryLocation={deliveryLocation}
          setDeliveryLocation={setDeliveryLocation}
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "60%",
    },
    {
      component: (
        <InfluencerRequirement
          key={5}
          influencerSize={influencerSize}
          setInfluencerSize={setInfluencerSize}
          influencerCategory={influencerCategory}
          setInfluencerCategory={setInfluencerCategory}
          influencerAge={influencerAge}
          setInfluencerAge={setInfluencerAge}
          influencerLocation={influencerLocation}
          setInfluencerLocation={setInfluencerLocation}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "75%",
    },
    {
      component: (
        <TaskDescription
          key={6}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "85%",
    },
    {
      component: (
        <BudgetDetails
          key={7}
          biddingFrom={biddingFrom}
          setBiddingFrom={setBiddingFrom}
          biddingTo={biddingTo}
          setBiddingTo={setBiddingTo}
          fixedPriceValue={fixedPriceValue}
          setFixedPriceValue={setFixedPriceValue}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious}
          loginStatus={loginStatus}
        />
      ),
      width: "95%",
    },
  ];

  const [progressBarWidth, setProgressBarWidth] = useState(steps[0].width);

  return (
    <div className="w-[80vw] relative">
      <div className="absolute top-[-40px] right-[-20px] z-10">
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-red-500 text-white hover:text-white rounded-xl focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-600 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-default"
          onClick={() => setOpenAddDealsModal(!openAddDealsModal)}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div className="w-full bg-[#cacaca] rounded-full dark:bg-gray-700" style={{ marginTop: 10 }}>
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full transition-all ease-out duration-500"
          style={{ width: progressBarWidth, height: "15px" }}
        ></div>
      </div>
      {steps[currentStep].component}
    </div>
  );
}
