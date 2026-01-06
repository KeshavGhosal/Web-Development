
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userMessage: string, history: {role: string, content: string}[]) => {
  const systemInstruction = `
    You are an AI representative for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.
    Your goal is to answer questions from recruiters and potential employers like you're his assistant.
    
    Candidate Bio: ${PERSONAL_INFO.bio}
    Location: ${PERSONAL_INFO.location}
    Skills: ${JSON.stringify(SKILLS)}
    Work History: ${JSON.stringify(EXPERIENCES)}

    Guidelines:
    - Be professional, confident, and helpful.
    - Highlight his technical expertise and leadership qualities.
    - If asked about something not in the resume, politely say you don't have that specific information but can suggest contacting him directly at ${PERSONAL_INFO.email}.
    - Keep responses concise (max 3 sentences) unless asked for details.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently offline. Please reach out to me via LinkedIn or Email!";
  }
};
