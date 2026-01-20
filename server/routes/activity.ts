import { RequestHandler } from "express";
import { ActivityTrackingRequest, ActivityTrackingResponse } from "@shared/api";

// In-memory activity storage (in production, use a database)
const activities: ActivityTrackingRequest[] = [];

export const handleTrackActivity: RequestHandler<
  unknown,
  ActivityTrackingResponse,
  ActivityTrackingRequest
> = (req, res) => {
  const { email, productId, productName, action, timestamp } = req.body;

  if (!email || !productId || !action) {
    return res.status(400).json({
      success: false,
      message: "Email, productId, and action are required",
    });
  }

  activities.push({
    email,
    productId,
    productName,
    action,
    timestamp,
  });

  console.log(`Activity tracked: ${email} - ${action} on ${productName}`);

  res.json({
    success: true,
    message: "Activity tracked successfully",
  });
};

export const handleGetActivities: RequestHandler = (req, res) => {
  res.json(activities);
};
