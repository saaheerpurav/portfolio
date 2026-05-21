export const profile = {
  firstName: "Saaheer",
  fullName: "Saaheer Roopesh Purav",
  email: "saaheer.purav.business@gmail.com",
  role: "full-stack developer",
  experienceStartYear: 2022,
  linkedinUrl: "https://www.linkedin.com/in/saaheer-purav",
  githubUrl: "https://github.com/saaheerpurav",
  xUrl: "https://x.com/saaheerpurav",
  cvPath: "/CV.pdf",
  chatbotUrl: "https://chatbot.saaheerpurav.com",
  chatbotId: "c5d8f014",
} as const;

export function getExperienceYears(date = new Date()) {
  return Math.max(date.getFullYear() - profile.experienceStartYear, 0);
}

export function getProfileDescription(date = new Date()) {
  return `${profile.firstName} is a ${profile.role} with ${getExperienceYears(
    date
  )} years of experience.`;
}
