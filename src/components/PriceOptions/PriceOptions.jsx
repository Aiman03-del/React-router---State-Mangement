import React from "react";
import PriceOption from "./PriceOption";

const priceOptions = [
  {
    id: 1,
    name: "Basic Plan",
    price: 29.99,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "One fitness assessment",
      "Free Wi-Fi",
      "Standard opening hours",
      "Monthly progress tracking",
      "Access to online fitness community",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 49.99,
    features: [
      "Access to gym equipment",
      "Locker room and shower access",
      "Two personal training sessions",
      "Access to group classes",
      "Nutritional guidance",
      "Free Wi-Fi",
      "Extended opening hours",
      "Weekly progress tracking",
      "Access to online fitness classes",
      "Discount on in-house supplements and merchandise",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 79.99,
    features: [
      "All access to gym equipment and facilities",
      "Locker room, shower, and sauna access",
      "Unlimited personal training sessions",
      "Unlimited group classes",
      "Advanced nutritional and workout planning",
      "Priority customer support",
      "Free Wi-Fi and refreshments",
      "24/7 access",
      "Daily progress tracking and analytics",
      "Access to premium online fitness content",
      "Discounts on partner fitness brands",
      "Monthly health check-ups and body composition analysis",
    ],
  },
  {
    id: 4,
    name: "Family Plan",
    price: 99.99,
    features: [
      "Access for up to 4 family members",
      "Locker room and shower access",
      "Group personal training sessions",
      "Access to family-friendly group classes",
      "Nutritional guidance for family meals",
      "Free Wi-Fi",
      "Extended opening hours",
      "Monthly family progress tracking",
      "Access to online family fitness programs",
      "Discount on family packages for supplements",
    ],
  },
  {
    id: 5,
    name: "Corporate Plan",
    price: 149.99,
    features: [
      "Access for up to 10 employees",
      "Exclusive locker room and shower facilities",
      "Team-building group classes",
      "Monthly personal and group training sessions",
      "Corporate wellness seminars",
      "Nutritional consultations",
      "Priority customer support",
      "24/7 gym access",
      "Monthly progress reports for HR",
      "Discounts on corporate fitness equipment",
      "Free refreshments and Wi-Fi",
      "Access to corporate online fitness portal",
    ],
  },
  {
    id: 6,
    name: "VIP Plan",
    price: 199.99,
    features: [
      "All-inclusive gym and spa access",
      "Personal locker with laundry service",
      "Private personal training sessions",
      "Exclusive VIP group classes",
      "Custom meal planning and delivery",
      "Dedicated VIP support team",
      "Free Wi-Fi and refreshments",
      "24/7 priority access",
      "Real-time health tracking with wearable devices",
      "Quarterly health assessments and medical consultations",
      "Invitations to exclusive gym events",
      "Access to VIP lounge and relaxation area",
    ],
  },
];

const PriceOptions = () => {
  return (
    <div className="mx-12 p-10">
      <h2 className="text-3xl text-center pb-6">Best Price in The Town</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
