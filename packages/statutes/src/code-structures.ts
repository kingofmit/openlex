import { StateCodeInfo } from "./citation-types";

/** State code structures — maps each state to its code naming conventions */
export const STATE_CODE_STRUCTURES: Map<string, StateCodeInfo> = new Map([
  ["al", {
    stateId: "al", stateName: "Alabama",
    codes: [
      { abbreviation: "Code", fullName: "Code of Alabama", bluebook: "Ala. Code", alwd: "Ala. Code" },
    ],
    constitutionFormat: "Ala. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ala. Acts {number}",
  }],
  ["ak", {
    stateId: "ak", stateName: "Alaska",
    codes: [
      { abbreviation: "Stat.", fullName: "Alaska Statutes", bluebook: "Alaska Stat.", alwd: "Alaska Stat." },
    ],
    constitutionFormat: "Alaska Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Alaska Sess. Laws ch. {chapter}",
  }],
  ["az", {
    stateId: "az", stateName: "Arizona",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Arizona Revised Statutes", bluebook: "Ariz. Rev. Stat. Ann.", alwd: "Ariz. Rev. Stat. Ann." },
    ],
    constitutionFormat: "Ariz. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ariz. Sess. Laws ch. {chapter}",
  }],
  ["ar", {
    stateId: "ar", stateName: "Arkansas",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Arkansas Code Annotated", bluebook: "Ark. Code Ann.", alwd: "Ark. Code Ann." },
    ],
    constitutionFormat: "Ark. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ark. Acts {number}",
  }],
  ["ca", {
    stateId: "ca", stateName: "California",
    codes: [
      { abbreviation: "Civ. Code", fullName: "Civil Code", bluebook: "Cal. Civ. Code", alwd: "Cal. Civ. Code" },
      { abbreviation: "Fam. Code", fullName: "Family Code", bluebook: "Cal. Fam. Code", alwd: "Cal. Fam. Code" },
      { abbreviation: "Lab. Code", fullName: "Labor Code", bluebook: "Cal. Lab. Code", alwd: "Cal. Lab. Code" },
      { abbreviation: "Penal Code", fullName: "Penal Code", bluebook: "Cal. Penal Code", alwd: "Cal. Penal Code" },
      { abbreviation: "Bus. & Prof. Code", fullName: "Business and Professions Code", bluebook: "Cal. Bus. & Prof. Code", alwd: "Cal. Bus. & Prof. Code" },
      { abbreviation: "Corp. Code", fullName: "Corporations Code", bluebook: "Cal. Corp. Code", alwd: "Cal. Corp. Code" },
      { abbreviation: "Gov. Code", fullName: "Government Code", bluebook: "Cal. Gov. Code", alwd: "Cal. Gov. Code" },
      { abbreviation: "Health & Saf. Code", fullName: "Health and Safety Code", bluebook: "Cal. Health & Saf. Code", alwd: "Cal. Health & Saf. Code" },
      { abbreviation: "Veh. Code", fullName: "Vehicle Code", bluebook: "Cal. Veh. Code", alwd: "Cal. Veh. Code" },
      { abbreviation: "Ins. Code", fullName: "Insurance Code", bluebook: "Cal. Ins. Code", alwd: "Cal. Ins. Code" },
      { abbreviation: "Prob. Code", fullName: "Probate Code", bluebook: "Cal. Prob. Code", alwd: "Cal. Prob. Code" },
      { abbreviation: "Civ. Proc. Code", fullName: "Code of Civil Procedure", bluebook: "Cal. Civ. Proc. Code", alwd: "Cal. Civ. Proc. Code" },
    ],
    constitutionFormat: "Cal. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Cal. Stat. ch. {chapter}",
  }],
  ["co", {
    stateId: "co", stateName: "Colorado",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Colorado Revised Statutes", bluebook: "Colo. Rev. Stat.", alwd: "Colo. Rev. Stat." },
    ],
    constitutionFormat: "Colo. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Colo. Sess. Laws ch. {chapter}",
  }],
  ["ct", {
    stateId: "ct", stateName: "Connecticut",
    codes: [
      { abbreviation: "Gen. Stat.", fullName: "Connecticut General Statutes", bluebook: "Conn. Gen. Stat.", alwd: "Conn. Gen. Stat." },
    ],
    constitutionFormat: "Conn. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Conn. Acts {number}",
  }],
  ["de", {
    stateId: "de", stateName: "Delaware",
    codes: [
      { abbreviation: "Code", fullName: "Delaware Code", bluebook: "Del. Code Ann. tit.", alwd: "Del. Code Ann. tit." },
    ],
    constitutionFormat: "Del. Const. art. {article}, § {section}",
    sessionLawFormat: "{volume} Del. Laws ch. {chapter}",
  }],
  ["fl", {
    stateId: "fl", stateName: "Florida",
    codes: [
      { abbreviation: "Stat.", fullName: "Florida Statutes", bluebook: "Fla. Stat.", alwd: "Fla. Stat." },
    ],
    constitutionFormat: "Fla. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Fla. Laws ch. {chapter}",
  }],
  ["ga", {
    stateId: "ga", stateName: "Georgia",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Official Code of Georgia Annotated", bluebook: "Ga. Code Ann.", alwd: "Ga. Code Ann." },
    ],
    constitutionFormat: "Ga. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ga. Laws {page}",
  }],
  ["hi", {
    stateId: "hi", stateName: "Hawaii",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Hawaii Revised Statutes", bluebook: "Haw. Rev. Stat.", alwd: "Haw. Rev. Stat." },
    ],
    constitutionFormat: "Haw. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Haw. Sess. Laws Act {number}",
  }],
  ["id", {
    stateId: "id", stateName: "Idaho",
    codes: [
      { abbreviation: "Code", fullName: "Idaho Code", bluebook: "Idaho Code", alwd: "Idaho Code" },
    ],
    constitutionFormat: "Idaho Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Idaho Sess. Laws ch. {chapter}",
  }],
  ["il", {
    stateId: "il", stateName: "Illinois",
    codes: [
      { abbreviation: "Comp. Stat.", fullName: "Illinois Compiled Statutes", bluebook: "Ill. Comp. Stat.", alwd: "Ill. Comp. Stat." },
    ],
    constitutionFormat: "Ill. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ill. Laws {page}",
  }],
  ["in", {
    stateId: "in", stateName: "Indiana",
    codes: [
      { abbreviation: "Code", fullName: "Indiana Code", bluebook: "Ind. Code", alwd: "Ind. Code" },
    ],
    constitutionFormat: "Ind. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ind. Acts {page}",
  }],
  ["ia", {
    stateId: "ia", stateName: "Iowa",
    codes: [
      { abbreviation: "Code", fullName: "Iowa Code", bluebook: "Iowa Code", alwd: "Iowa Code" },
    ],
    constitutionFormat: "Iowa Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Iowa Acts ch. {chapter}",
  }],
  ["ks", {
    stateId: "ks", stateName: "Kansas",
    codes: [
      { abbreviation: "Stat. Ann.", fullName: "Kansas Statutes Annotated", bluebook: "Kan. Stat. Ann.", alwd: "Kan. Stat. Ann." },
    ],
    constitutionFormat: "Kan. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Kan. Sess. Laws ch. {chapter}",
  }],
  ["ky", {
    stateId: "ky", stateName: "Kentucky",
    codes: [
      { abbreviation: "Rev. Stat. Ann.", fullName: "Kentucky Revised Statutes Annotated", bluebook: "Ky. Rev. Stat. Ann.", alwd: "Ky. Rev. Stat. Ann." },
    ],
    constitutionFormat: "Ky. Const. § {section}",
    sessionLawFormat: "{year} Ky. Acts ch. {chapter}",
  }],
  ["la", {
    stateId: "la", stateName: "Louisiana",
    codes: [
      { abbreviation: "Civ. Code", fullName: "Louisiana Civil Code", bluebook: "La. Civ. Code", alwd: "La. Civ. Code" },
      { abbreviation: "Rev. Stat.", fullName: "Louisiana Revised Statutes", bluebook: "La. Rev. Stat.", alwd: "La. Rev. Stat." },
    ],
    constitutionFormat: "La. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} La. Acts No. {number}",
  }],
  ["me", {
    stateId: "me", stateName: "Maine",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Maine Revised Statutes", bluebook: "Me. Rev. Stat. Ann. tit.", alwd: "Me. Rev. Stat. Ann. tit." },
    ],
    constitutionFormat: "Me. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Me. Laws ch. {chapter}",
  }],
  ["md", {
    stateId: "md", stateName: "Maryland",
    codes: [
      { abbreviation: "Code", fullName: "Maryland Code", bluebook: "Md. Code Ann.", alwd: "Md. Code Ann." },
    ],
    constitutionFormat: "Md. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Md. Laws ch. {chapter}",
  }],
  ["ma", {
    stateId: "ma", stateName: "Massachusetts",
    codes: [
      { abbreviation: "Gen. Laws", fullName: "Massachusetts General Laws", bluebook: "Mass. Gen. Laws ch.", alwd: "Mass. Gen. Laws ch." },
    ],
    constitutionFormat: "Mass. Const. pt. {part}, art. {article}",
    sessionLawFormat: "{year} Mass. Acts ch. {chapter}",
  }],
  ["mi", {
    stateId: "mi", stateName: "Michigan",
    codes: [
      { abbreviation: "Comp. Laws", fullName: "Michigan Compiled Laws", bluebook: "Mich. Comp. Laws", alwd: "Mich. Comp. Laws" },
    ],
    constitutionFormat: "Mich. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Mich. Pub. Acts No. {number}",
  }],
  ["mn", {
    stateId: "mn", stateName: "Minnesota",
    codes: [
      { abbreviation: "Stat.", fullName: "Minnesota Statutes", bluebook: "Minn. Stat.", alwd: "Minn. Stat." },
    ],
    constitutionFormat: "Minn. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Minn. Laws ch. {chapter}",
  }],
  ["ms", {
    stateId: "ms", stateName: "Mississippi",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Mississippi Code Annotated", bluebook: "Miss. Code Ann.", alwd: "Miss. Code Ann." },
    ],
    constitutionFormat: "Miss. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Miss. Laws ch. {chapter}",
  }],
  ["mo", {
    stateId: "mo", stateName: "Missouri",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Missouri Revised Statutes", bluebook: "Mo. Rev. Stat.", alwd: "Mo. Rev. Stat." },
    ],
    constitutionFormat: "Mo. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Mo. Laws {page}",
  }],
  ["mt", {
    stateId: "mt", stateName: "Montana",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Montana Code Annotated", bluebook: "Mont. Code Ann.", alwd: "Mont. Code Ann." },
    ],
    constitutionFormat: "Mont. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Mont. Laws ch. {chapter}",
  }],
  ["ne", {
    stateId: "ne", stateName: "Nebraska",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Nebraska Revised Statutes", bluebook: "Neb. Rev. Stat.", alwd: "Neb. Rev. Stat." },
    ],
    constitutionFormat: "Neb. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Neb. Laws L.B. {number}",
  }],
  ["nv", {
    stateId: "nv", stateName: "Nevada",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Nevada Revised Statutes", bluebook: "Nev. Rev. Stat.", alwd: "Nev. Rev. Stat." },
    ],
    constitutionFormat: "Nev. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Nev. Stat. ch. {chapter}",
  }],
  ["nh", {
    stateId: "nh", stateName: "New Hampshire",
    codes: [
      { abbreviation: "Rev. Stat. Ann.", fullName: "New Hampshire Revised Statutes Annotated", bluebook: "N.H. Rev. Stat. Ann.", alwd: "N.H. Rev. Stat. Ann." },
    ],
    constitutionFormat: "N.H. Const. pt. {part}, art. {article}",
    sessionLawFormat: "{year} N.H. Laws ch. {chapter}",
  }],
  ["nj", {
    stateId: "nj", stateName: "New Jersey",
    codes: [
      { abbreviation: "Stat. Ann.", fullName: "New Jersey Statutes Annotated", bluebook: "N.J. Stat. Ann.", alwd: "N.J. Stat. Ann." },
    ],
    constitutionFormat: "N.J. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} N.J. Laws ch. {chapter}",
  }],
  ["nm", {
    stateId: "nm", stateName: "New Mexico",
    codes: [
      { abbreviation: "Stat. Ann.", fullName: "New Mexico Statutes Annotated", bluebook: "N.M. Stat. Ann.", alwd: "N.M. Stat. Ann." },
    ],
    constitutionFormat: "N.M. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} N.M. Laws ch. {chapter}",
  }],
  ["ny", {
    stateId: "ny", stateName: "New York",
    codes: [
      { abbreviation: "Gen. Oblig. Law", fullName: "General Obligations Law", bluebook: "N.Y. Gen. Oblig. Law", alwd: "N.Y. Gen. Oblig. Law" },
      { abbreviation: "Dom. Rel. Law", fullName: "Domestic Relations Law", bluebook: "N.Y. Dom. Rel. Law", alwd: "N.Y. Dom. Rel. Law" },
      { abbreviation: "Lab. Law", fullName: "Labor Law", bluebook: "N.Y. Lab. Law", alwd: "N.Y. Lab. Law" },
      { abbreviation: "Penal Law", fullName: "Penal Law", bluebook: "N.Y. Penal Law", alwd: "N.Y. Penal Law" },
      { abbreviation: "Real Prop. Law", fullName: "Real Property Law", bluebook: "N.Y. Real Prop. Law", alwd: "N.Y. Real Prop. Law" },
      { abbreviation: "Bus. Corp. Law", fullName: "Business Corporation Law", bluebook: "N.Y. Bus. Corp. Law", alwd: "N.Y. Bus. Corp. Law" },
      { abbreviation: "Ltd. Liab. Co. Law", fullName: "Limited Liability Company Law", bluebook: "N.Y. Ltd. Liab. Co. Law", alwd: "N.Y. Ltd. Liab. Co. Law" },
      { abbreviation: "Veh. & Traf. Law", fullName: "Vehicle and Traffic Law", bluebook: "N.Y. Veh. & Traf. Law", alwd: "N.Y. Veh. & Traf. Law" },
      { abbreviation: "C.P.L.R.", fullName: "Civil Practice Law and Rules", bluebook: "N.Y. C.P.L.R.", alwd: "N.Y. C.P.L.R." },
    ],
    constitutionFormat: "N.Y. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} N.Y. Laws ch. {chapter}",
  }],
  ["nc", {
    stateId: "nc", stateName: "North Carolina",
    codes: [
      { abbreviation: "Gen. Stat.", fullName: "North Carolina General Statutes", bluebook: "N.C. Gen. Stat.", alwd: "N.C. Gen. Stat." },
    ],
    constitutionFormat: "N.C. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} N.C. Sess. Laws ch. {chapter}",
  }],
  ["nd", {
    stateId: "nd", stateName: "North Dakota",
    codes: [
      { abbreviation: "Cent. Code", fullName: "North Dakota Century Code", bluebook: "N.D. Cent. Code", alwd: "N.D. Cent. Code" },
    ],
    constitutionFormat: "N.D. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} N.D. Laws ch. {chapter}",
  }],
  ["oh", {
    stateId: "oh", stateName: "Ohio",
    codes: [
      { abbreviation: "Rev. Code Ann.", fullName: "Ohio Revised Code Annotated", bluebook: "Ohio Rev. Code Ann.", alwd: "Ohio Rev. Code Ann." },
    ],
    constitutionFormat: "Ohio Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Ohio Laws {page}",
  }],
  ["ok", {
    stateId: "ok", stateName: "Oklahoma",
    codes: [
      { abbreviation: "Stat.", fullName: "Oklahoma Statutes", bluebook: "Okla. Stat. tit.", alwd: "Okla. Stat. tit." },
    ],
    constitutionFormat: "Okla. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Okla. Sess. Laws ch. {chapter}",
  }],
  ["or", {
    stateId: "or", stateName: "Oregon",
    codes: [
      { abbreviation: "Rev. Stat.", fullName: "Oregon Revised Statutes", bluebook: "Or. Rev. Stat.", alwd: "Or. Rev. Stat." },
    ],
    constitutionFormat: "Or. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Or. Laws ch. {chapter}",
  }],
  ["pa", {
    stateId: "pa", stateName: "Pennsylvania",
    codes: [
      { abbreviation: "Cons. Stat.", fullName: "Pennsylvania Consolidated Statutes", bluebook: "Pa. Cons. Stat.", alwd: "Pa. Cons. Stat." },
    ],
    constitutionFormat: "Pa. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Pa. Laws {number}",
  }],
  ["ri", {
    stateId: "ri", stateName: "Rhode Island",
    codes: [
      { abbreviation: "Gen. Laws", fullName: "Rhode Island General Laws", bluebook: "R.I. Gen. Laws", alwd: "R.I. Gen. Laws" },
    ],
    constitutionFormat: "R.I. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} R.I. Pub. Laws ch. {chapter}",
  }],
  ["sc", {
    stateId: "sc", stateName: "South Carolina",
    codes: [
      { abbreviation: "Code Ann.", fullName: "South Carolina Code of Laws", bluebook: "S.C. Code Ann.", alwd: "S.C. Code Ann." },
    ],
    constitutionFormat: "S.C. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} S.C. Acts No. {number}",
  }],
  ["sd", {
    stateId: "sd", stateName: "South Dakota",
    codes: [
      { abbreviation: "Codified Laws", fullName: "South Dakota Codified Laws", bluebook: "S.D. Codified Laws", alwd: "S.D. Codified Laws" },
    ],
    constitutionFormat: "S.D. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} S.D. Sess. Laws ch. {chapter}",
  }],
  ["tn", {
    stateId: "tn", stateName: "Tennessee",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Tennessee Code Annotated", bluebook: "Tenn. Code Ann.", alwd: "Tenn. Code Ann." },
    ],
    constitutionFormat: "Tenn. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Tenn. Pub. Acts ch. {chapter}",
  }],
  ["tx", {
    stateId: "tx", stateName: "Texas",
    codes: [
      { abbreviation: "Prop. Code", fullName: "Property Code", bluebook: "Tex. Prop. Code Ann.", alwd: "Tex. Prop. Code Ann." },
      { abbreviation: "Fam. Code", fullName: "Family Code", bluebook: "Tex. Fam. Code Ann.", alwd: "Tex. Fam. Code Ann." },
      { abbreviation: "Lab. Code", fullName: "Labor Code", bluebook: "Tex. Lab. Code Ann.", alwd: "Tex. Lab. Code Ann." },
      { abbreviation: "Penal Code", fullName: "Penal Code", bluebook: "Tex. Penal Code Ann.", alwd: "Tex. Penal Code Ann." },
      { abbreviation: "Bus. Orgs. Code", fullName: "Business Organizations Code", bluebook: "Tex. Bus. Orgs. Code Ann.", alwd: "Tex. Bus. Orgs. Code Ann." },
      { abbreviation: "Gov't Code", fullName: "Government Code", bluebook: "Tex. Gov't Code Ann.", alwd: "Tex. Gov't Code Ann." },
      { abbreviation: "Civ. Prac. & Rem. Code", fullName: "Civil Practice and Remedies Code", bluebook: "Tex. Civ. Prac. & Rem. Code Ann.", alwd: "Tex. Civ. Prac. & Rem. Code Ann." },
    ],
    constitutionFormat: "Tex. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Tex. Gen. Laws ch. {chapter}",
  }],
  ["ut", {
    stateId: "ut", stateName: "Utah",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Utah Code Annotated", bluebook: "Utah Code Ann.", alwd: "Utah Code Ann." },
    ],
    constitutionFormat: "Utah Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Utah Laws ch. {chapter}",
  }],
  ["vt", {
    stateId: "vt", stateName: "Vermont",
    codes: [
      { abbreviation: "Stat. Ann.", fullName: "Vermont Statutes Annotated", bluebook: "Vt. Stat. Ann. tit.", alwd: "Vt. Stat. Ann. tit." },
    ],
    constitutionFormat: "Vt. Const. ch. {chapter}, § {section}",
    sessionLawFormat: "{year} Vt. Acts & Resolves No. {number}",
  }],
  ["va", {
    stateId: "va", stateName: "Virginia",
    codes: [
      { abbreviation: "Code Ann.", fullName: "Code of Virginia", bluebook: "Va. Code Ann.", alwd: "Va. Code Ann." },
    ],
    constitutionFormat: "Va. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Va. Acts ch. {chapter}",
  }],
  ["wa", {
    stateId: "wa", stateName: "Washington",
    codes: [
      { abbreviation: "Rev. Code", fullName: "Revised Code of Washington", bluebook: "Wash. Rev. Code", alwd: "Wash. Rev. Code" },
    ],
    constitutionFormat: "Wash. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Wash. Laws ch. {chapter}",
  }],
  ["wv", {
    stateId: "wv", stateName: "West Virginia",
    codes: [
      { abbreviation: "Code", fullName: "West Virginia Code", bluebook: "W. Va. Code", alwd: "W. Va. Code" },
    ],
    constitutionFormat: "W. Va. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} W. Va. Acts ch. {chapter}",
  }],
  ["wi", {
    stateId: "wi", stateName: "Wisconsin",
    codes: [
      { abbreviation: "Stat.", fullName: "Wisconsin Statutes", bluebook: "Wis. Stat.", alwd: "Wis. Stat." },
    ],
    constitutionFormat: "Wis. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Wis. Act {number}",
  }],
  ["wy", {
    stateId: "wy", stateName: "Wyoming",
    codes: [
      { abbreviation: "Stat. Ann.", fullName: "Wyoming Statutes Annotated", bluebook: "Wyo. Stat. Ann.", alwd: "Wyo. Stat. Ann." },
    ],
    constitutionFormat: "Wyo. Const. art. {article}, § {section}",
    sessionLawFormat: "{year} Wyo. Sess. Laws ch. {chapter}",
  }],
  ["dc", {
    stateId: "dc", stateName: "District of Columbia",
    codes: [
      { abbreviation: "Code", fullName: "District of Columbia Official Code", bluebook: "D.C. Code", alwd: "D.C. Code" },
    ],
    constitutionFormat: "",
    sessionLawFormat: "D.C. Law {number}",
  }],
]);
