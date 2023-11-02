{
  //

  // Union Types

  type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper"; // String Literal Type
  type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper"; // String Literal Type

  type Developer = FrontendDeveloper | FullstackDeveloper; // Union Types

  const newDeveloper: Developer = "JuniorDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "O-" | "B+" | "B-" | "A+" | "A-";
  };

  // Intersection Type

  type JuniorDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type SeniorBackendDeveloper = JuniorDeveloper & BackendDeveloper; // Intersection Type

  const newSeniorBackendDeveloper: SeniorBackendDeveloper = {
    skills: ["HTML", "CSS", "React"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
