import { Court } from "@openlex/core";

/**
 * All 94 U.S. federal district courts.
 *
 * Sources: 28 U.S.C. §§ 81–131 (judicial districts),
 * Administrative Office of the U.S. Courts.
 */
export const FEDERAL_DISTRICT_COURTS: Court[] = [
  // ── First Circuit ──────────────────────────────────────────────
  { id: "usdc-dme", jurisdictionId: "us", name: "U.S. District Court for the District of Maine", abbreviation: "D. Me.", level: "trial" as const, circuit: "1", district: "D. Me.", url: "https://www.med.uscourts.gov" },
  { id: "usdc-dma", jurisdictionId: "us", name: "U.S. District Court for the District of Massachusetts", abbreviation: "D. Mass.", level: "trial" as const, circuit: "1", district: "D. Mass.", url: "https://www.mad.uscourts.gov" },
  { id: "usdc-dnh", jurisdictionId: "us", name: "U.S. District Court for the District of New Hampshire", abbreviation: "D.N.H.", level: "trial" as const, circuit: "1", district: "D.N.H.", url: "https://www.nhd.uscourts.gov" },
  { id: "usdc-dri", jurisdictionId: "us", name: "U.S. District Court for the District of Rhode Island", abbreviation: "D.R.I.", level: "trial" as const, circuit: "1", district: "D.R.I.", url: "https://www.rid.uscourts.gov" },
  { id: "usdc-dpr", jurisdictionId: "us", name: "U.S. District Court for the District of Puerto Rico", abbreviation: "D.P.R.", level: "trial" as const, circuit: "1", district: "D.P.R.", url: "https://www.prd.uscourts.gov" },

  // ── Second Circuit ─────────────────────────────────────────────
  { id: "usdc-dct", jurisdictionId: "us", name: "U.S. District Court for the District of Connecticut", abbreviation: "D. Conn.", level: "trial" as const, circuit: "2", district: "D. Conn.", url: "https://www.ctd.uscourts.gov" },
  { id: "usdc-ndny", jurisdictionId: "us", name: "U.S. District Court for the Northern District of New York", abbreviation: "N.D.N.Y.", level: "trial" as const, circuit: "2", district: "N.D.N.Y.", url: "https://www.nynd.uscourts.gov" },
  { id: "usdc-sdny", jurisdictionId: "us", name: "U.S. District Court for the Southern District of New York", abbreviation: "S.D.N.Y.", level: "trial" as const, circuit: "2", district: "S.D.N.Y.", url: "https://www.nysd.uscourts.gov" },
  { id: "usdc-edny", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of New York", abbreviation: "E.D.N.Y.", level: "trial" as const, circuit: "2", district: "E.D.N.Y.", url: "https://www.nyed.uscourts.gov" },
  { id: "usdc-wdny", jurisdictionId: "us", name: "U.S. District Court for the Western District of New York", abbreviation: "W.D.N.Y.", level: "trial" as const, circuit: "2", district: "W.D.N.Y.", url: "https://www.nywd.uscourts.gov" },
  { id: "usdc-dvt", jurisdictionId: "us", name: "U.S. District Court for the District of Vermont", abbreviation: "D. Vt.", level: "trial" as const, circuit: "2", district: "D. Vt.", url: "https://www.vtd.uscourts.gov" },

  // ── Third Circuit ──────────────────────────────────────────────
  { id: "usdc-dde", jurisdictionId: "us", name: "U.S. District Court for the District of Delaware", abbreviation: "D. Del.", level: "trial" as const, circuit: "3", district: "D. Del.", url: "https://www.ded.uscourts.gov" },
  { id: "usdc-dnj", jurisdictionId: "us", name: "U.S. District Court for the District of New Jersey", abbreviation: "D.N.J.", level: "trial" as const, circuit: "3", district: "D.N.J.", url: "https://www.njd.uscourts.gov" },
  { id: "usdc-edpa", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Pennsylvania", abbreviation: "E.D. Pa.", level: "trial" as const, circuit: "3", district: "E.D. Pa.", url: "https://www.paed.uscourts.gov" },
  { id: "usdc-mdpa", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Pennsylvania", abbreviation: "M.D. Pa.", level: "trial" as const, circuit: "3", district: "M.D. Pa.", url: "https://www.pamd.uscourts.gov" },
  { id: "usdc-wdpa", jurisdictionId: "us", name: "U.S. District Court for the Western District of Pennsylvania", abbreviation: "W.D. Pa.", level: "trial" as const, circuit: "3", district: "W.D. Pa.", url: "https://www.pawd.uscourts.gov" },
  { id: "usdc-dvi", jurisdictionId: "us", name: "U.S. District Court for the District of the Virgin Islands", abbreviation: "D.V.I.", level: "trial" as const, circuit: "3", district: "D.V.I.", url: "https://www.vid.uscourts.gov" },

  // ── Fourth Circuit ─────────────────────────────────────────────
  { id: "usdc-dmd", jurisdictionId: "us", name: "U.S. District Court for the District of Maryland", abbreviation: "D. Md.", level: "trial" as const, circuit: "4", district: "D. Md.", url: "https://www.mdd.uscourts.gov" },
  { id: "usdc-ednc", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of North Carolina", abbreviation: "E.D.N.C.", level: "trial" as const, circuit: "4", district: "E.D.N.C.", url: "https://www.nced.uscourts.gov" },
  { id: "usdc-mdnc", jurisdictionId: "us", name: "U.S. District Court for the Middle District of North Carolina", abbreviation: "M.D.N.C.", level: "trial" as const, circuit: "4", district: "M.D.N.C.", url: "https://www.ncmd.uscourts.gov" },
  { id: "usdc-wdnc", jurisdictionId: "us", name: "U.S. District Court for the Western District of North Carolina", abbreviation: "W.D.N.C.", level: "trial" as const, circuit: "4", district: "W.D.N.C.", url: "https://www.ncwd.uscourts.gov" },
  { id: "usdc-dsc", jurisdictionId: "us", name: "U.S. District Court for the District of South Carolina", abbreviation: "D.S.C.", level: "trial" as const, circuit: "4", district: "D.S.C.", url: "https://www.scd.uscourts.gov" },
  { id: "usdc-edva", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Virginia", abbreviation: "E.D. Va.", level: "trial" as const, circuit: "4", district: "E.D. Va.", url: "https://www.vaed.uscourts.gov" },
  { id: "usdc-wdva", jurisdictionId: "us", name: "U.S. District Court for the Western District of Virginia", abbreviation: "W.D. Va.", level: "trial" as const, circuit: "4", district: "W.D. Va.", url: "https://www.vawd.uscourts.gov" },
  { id: "usdc-ndwv", jurisdictionId: "us", name: "U.S. District Court for the Northern District of West Virginia", abbreviation: "N.D.W. Va.", level: "trial" as const, circuit: "4", district: "N.D.W. Va.", url: "https://www.wvnd.uscourts.gov" },
  { id: "usdc-sdwv", jurisdictionId: "us", name: "U.S. District Court for the Southern District of West Virginia", abbreviation: "S.D.W. Va.", level: "trial" as const, circuit: "4", district: "S.D.W. Va.", url: "https://www.wvsd.uscourts.gov" },

  // ── Fifth Circuit ──────────────────────────────────────────────
  { id: "usdc-edla", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Louisiana", abbreviation: "E.D. La.", level: "trial" as const, circuit: "5", district: "E.D. La.", url: "https://www.laed.uscourts.gov" },
  { id: "usdc-mdla", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Louisiana", abbreviation: "M.D. La.", level: "trial" as const, circuit: "5", district: "M.D. La.", url: "https://www.lamd.uscourts.gov" },
  { id: "usdc-wdla", jurisdictionId: "us", name: "U.S. District Court for the Western District of Louisiana", abbreviation: "W.D. La.", level: "trial" as const, circuit: "5", district: "W.D. La.", url: "https://www.lawd.uscourts.gov" },
  { id: "usdc-ndms", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Mississippi", abbreviation: "N.D. Miss.", level: "trial" as const, circuit: "5", district: "N.D. Miss.", url: "https://www.msnd.uscourts.gov" },
  { id: "usdc-sdms", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Mississippi", abbreviation: "S.D. Miss.", level: "trial" as const, circuit: "5", district: "S.D. Miss.", url: "https://www.mssd.uscourts.gov" },
  { id: "usdc-ndtx", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Texas", abbreviation: "N.D. Tex.", level: "trial" as const, circuit: "5", district: "N.D. Tex.", url: "https://www.txnd.uscourts.gov" },
  { id: "usdc-sdtx", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Texas", abbreviation: "S.D. Tex.", level: "trial" as const, circuit: "5", district: "S.D. Tex.", url: "https://www.txsd.uscourts.gov" },
  { id: "usdc-edtx", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Texas", abbreviation: "E.D. Tex.", level: "trial" as const, circuit: "5", district: "E.D. Tex.", url: "https://www.txed.uscourts.gov" },
  { id: "usdc-wdtx", jurisdictionId: "us", name: "U.S. District Court for the Western District of Texas", abbreviation: "W.D. Tex.", level: "trial" as const, circuit: "5", district: "W.D. Tex.", url: "https://www.txwd.uscourts.gov" },

  // ── Sixth Circuit ──────────────────────────────────────────────
  { id: "usdc-edky", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Kentucky", abbreviation: "E.D. Ky.", level: "trial" as const, circuit: "6", district: "E.D. Ky.", url: "https://www.kyed.uscourts.gov" },
  { id: "usdc-wdky", jurisdictionId: "us", name: "U.S. District Court for the Western District of Kentucky", abbreviation: "W.D. Ky.", level: "trial" as const, circuit: "6", district: "W.D. Ky.", url: "https://www.kywd.uscourts.gov" },
  { id: "usdc-edmi", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Michigan", abbreviation: "E.D. Mich.", level: "trial" as const, circuit: "6", district: "E.D. Mich.", url: "https://www.mied.uscourts.gov" },
  { id: "usdc-wdmi", jurisdictionId: "us", name: "U.S. District Court for the Western District of Michigan", abbreviation: "W.D. Mich.", level: "trial" as const, circuit: "6", district: "W.D. Mich.", url: "https://www.miwd.uscourts.gov" },
  { id: "usdc-ndoh", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Ohio", abbreviation: "N.D. Ohio", level: "trial" as const, circuit: "6", district: "N.D. Ohio", url: "https://www.ohnd.uscourts.gov" },
  { id: "usdc-sdoh", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Ohio", abbreviation: "S.D. Ohio", level: "trial" as const, circuit: "6", district: "S.D. Ohio", url: "https://www.ohsd.uscourts.gov" },
  { id: "usdc-edtn", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Tennessee", abbreviation: "E.D. Tenn.", level: "trial" as const, circuit: "6", district: "E.D. Tenn.", url: "https://www.tned.uscourts.gov" },
  { id: "usdc-mdtn", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Tennessee", abbreviation: "M.D. Tenn.", level: "trial" as const, circuit: "6", district: "M.D. Tenn.", url: "https://www.tnmd.uscourts.gov" },
  { id: "usdc-wdtn", jurisdictionId: "us", name: "U.S. District Court for the Western District of Tennessee", abbreviation: "W.D. Tenn.", level: "trial" as const, circuit: "6", district: "W.D. Tenn.", url: "https://www.tnwd.uscourts.gov" },

  // ── Seventh Circuit ────────────────────────────────────────────
  { id: "usdc-cdil", jurisdictionId: "us", name: "U.S. District Court for the Central District of Illinois", abbreviation: "C.D. Ill.", level: "trial" as const, circuit: "7", district: "C.D. Ill.", url: "https://www.ilcd.uscourts.gov" },
  { id: "usdc-ndil", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Illinois", abbreviation: "N.D. Ill.", level: "trial" as const, circuit: "7", district: "N.D. Ill.", url: "https://www.ilnd.uscourts.gov" },
  { id: "usdc-sdil", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Illinois", abbreviation: "S.D. Ill.", level: "trial" as const, circuit: "7", district: "S.D. Ill.", url: "https://www.ilsd.uscourts.gov" },
  { id: "usdc-ndin", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Indiana", abbreviation: "N.D. Ind.", level: "trial" as const, circuit: "7", district: "N.D. Ind.", url: "https://www.innd.uscourts.gov" },
  { id: "usdc-sdin", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Indiana", abbreviation: "S.D. Ind.", level: "trial" as const, circuit: "7", district: "S.D. Ind.", url: "https://www.insd.uscourts.gov" },
  { id: "usdc-edwi", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Wisconsin", abbreviation: "E.D. Wis.", level: "trial" as const, circuit: "7", district: "E.D. Wis.", url: "https://www.wied.uscourts.gov" },
  { id: "usdc-wdwi", jurisdictionId: "us", name: "U.S. District Court for the Western District of Wisconsin", abbreviation: "W.D. Wis.", level: "trial" as const, circuit: "7", district: "W.D. Wis.", url: "https://www.wiwd.uscourts.gov" },

  // ── Eighth Circuit ─────────────────────────────────────────────
  { id: "usdc-edar", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Arkansas", abbreviation: "E.D. Ark.", level: "trial" as const, circuit: "8", district: "E.D. Ark.", url: "https://www.ared.uscourts.gov" },
  { id: "usdc-wdar", jurisdictionId: "us", name: "U.S. District Court for the Western District of Arkansas", abbreviation: "W.D. Ark.", level: "trial" as const, circuit: "8", district: "W.D. Ark.", url: "https://www.arwd.uscourts.gov" },
  { id: "usdc-ndia", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Iowa", abbreviation: "N.D. Iowa", level: "trial" as const, circuit: "8", district: "N.D. Iowa", url: "https://www.iand.uscourts.gov" },
  { id: "usdc-sdia", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Iowa", abbreviation: "S.D. Iowa", level: "trial" as const, circuit: "8", district: "S.D. Iowa", url: "https://www.iasd.uscourts.gov" },
  { id: "usdc-dmn", jurisdictionId: "us", name: "U.S. District Court for the District of Minnesota", abbreviation: "D. Minn.", level: "trial" as const, circuit: "8", district: "D. Minn.", url: "https://www.mnd.uscourts.gov" },
  { id: "usdc-edmo", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Missouri", abbreviation: "E.D. Mo.", level: "trial" as const, circuit: "8", district: "E.D. Mo.", url: "https://www.moed.uscourts.gov" },
  { id: "usdc-wdmo", jurisdictionId: "us", name: "U.S. District Court for the Western District of Missouri", abbreviation: "W.D. Mo.", level: "trial" as const, circuit: "8", district: "W.D. Mo.", url: "https://www.mowd.uscourts.gov" },
  { id: "usdc-dne", jurisdictionId: "us", name: "U.S. District Court for the District of Nebraska", abbreviation: "D. Neb.", level: "trial" as const, circuit: "8", district: "D. Neb.", url: "https://www.ned.uscourts.gov" },
  { id: "usdc-dnd", jurisdictionId: "us", name: "U.S. District Court for the District of North Dakota", abbreviation: "D.N.D.", level: "trial" as const, circuit: "8", district: "D.N.D.", url: "https://www.ndd.uscourts.gov" },
  { id: "usdc-dsd", jurisdictionId: "us", name: "U.S. District Court for the District of South Dakota", abbreviation: "D.S.D.", level: "trial" as const, circuit: "8", district: "D.S.D.", url: "https://www.sdd.uscourts.gov" },

  // ── Ninth Circuit ──────────────────────────────────────────────
  { id: "usdc-dak", jurisdictionId: "us", name: "U.S. District Court for the District of Alaska", abbreviation: "D. Alaska", level: "trial" as const, circuit: "9", district: "D. Alaska", url: "https://www.akd.uscourts.gov" },
  { id: "usdc-daz", jurisdictionId: "us", name: "U.S. District Court for the District of Arizona", abbreviation: "D. Ariz.", level: "trial" as const, circuit: "9", district: "D. Ariz.", url: "https://www.azd.uscourts.gov" },
  { id: "usdc-cdca", jurisdictionId: "us", name: "U.S. District Court for the Central District of California", abbreviation: "C.D. Cal.", level: "trial" as const, circuit: "9", district: "C.D. Cal.", url: "https://www.cacd.uscourts.gov" },
  { id: "usdc-edca", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of California", abbreviation: "E.D. Cal.", level: "trial" as const, circuit: "9", district: "E.D. Cal.", url: "https://www.caed.uscourts.gov" },
  { id: "usdc-ndca", jurisdictionId: "us", name: "U.S. District Court for the Northern District of California", abbreviation: "N.D. Cal.", level: "trial" as const, circuit: "9", district: "N.D. Cal.", url: "https://www.cand.uscourts.gov" },
  { id: "usdc-sdca", jurisdictionId: "us", name: "U.S. District Court for the Southern District of California", abbreviation: "S.D. Cal.", level: "trial" as const, circuit: "9", district: "S.D. Cal.", url: "https://www.casd.uscourts.gov" },
  { id: "usdc-dhi", jurisdictionId: "us", name: "U.S. District Court for the District of Hawaii", abbreviation: "D. Haw.", level: "trial" as const, circuit: "9", district: "D. Haw.", url: "https://www.hid.uscourts.gov" },
  { id: "usdc-did", jurisdictionId: "us", name: "U.S. District Court for the District of Idaho", abbreviation: "D. Idaho", level: "trial" as const, circuit: "9", district: "D. Idaho", url: "https://www.idd.uscourts.gov" },
  { id: "usdc-dmt", jurisdictionId: "us", name: "U.S. District Court for the District of Montana", abbreviation: "D. Mont.", level: "trial" as const, circuit: "9", district: "D. Mont.", url: "https://www.mtd.uscourts.gov" },
  { id: "usdc-dnv", jurisdictionId: "us", name: "U.S. District Court for the District of Nevada", abbreviation: "D. Nev.", level: "trial" as const, circuit: "9", district: "D. Nev.", url: "https://www.nvd.uscourts.gov" },
  { id: "usdc-dor", jurisdictionId: "us", name: "U.S. District Court for the District of Oregon", abbreviation: "D. Or.", level: "trial" as const, circuit: "9", district: "D. Or.", url: "https://www.ord.uscourts.gov" },
  { id: "usdc-edwa", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Washington", abbreviation: "E.D. Wash.", level: "trial" as const, circuit: "9", district: "E.D. Wash.", url: "https://www.waed.uscourts.gov" },
  { id: "usdc-wdwa", jurisdictionId: "us", name: "U.S. District Court for the Western District of Washington", abbreviation: "W.D. Wash.", level: "trial" as const, circuit: "9", district: "W.D. Wash.", url: "https://www.wawd.uscourts.gov" },
  { id: "usdc-dgu", jurisdictionId: "us", name: "U.S. District Court for the District of Guam", abbreviation: "D. Guam", level: "trial" as const, circuit: "9", district: "D. Guam", url: "https://www.gud.uscourts.gov" },
  { id: "usdc-dnmi", jurisdictionId: "us", name: "U.S. District Court for the District of the Northern Mariana Islands", abbreviation: "D.N. Mar. I.", level: "trial" as const, circuit: "9", district: "D.N. Mar. I.", url: "https://www.nmid.uscourts.gov" },

  // ── Tenth Circuit ──────────────────────────────────────────────
  { id: "usdc-dco", jurisdictionId: "us", name: "U.S. District Court for the District of Colorado", abbreviation: "D. Colo.", level: "trial" as const, circuit: "10", district: "D. Colo.", url: "https://www.cod.uscourts.gov" },
  { id: "usdc-dks", jurisdictionId: "us", name: "U.S. District Court for the District of Kansas", abbreviation: "D. Kan.", level: "trial" as const, circuit: "10", district: "D. Kan.", url: "https://www.ksd.uscourts.gov" },
  { id: "usdc-dnm", jurisdictionId: "us", name: "U.S. District Court for the District of New Mexico", abbreviation: "D.N.M.", level: "trial" as const, circuit: "10", district: "D.N.M.", url: "https://www.nmd.uscourts.gov" },
  { id: "usdc-edok", jurisdictionId: "us", name: "U.S. District Court for the Eastern District of Oklahoma", abbreviation: "E.D. Okla.", level: "trial" as const, circuit: "10", district: "E.D. Okla.", url: "https://www.oked.uscourts.gov" },
  { id: "usdc-ndok", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Oklahoma", abbreviation: "N.D. Okla.", level: "trial" as const, circuit: "10", district: "N.D. Okla.", url: "https://www.oknd.uscourts.gov" },
  { id: "usdc-wdok", jurisdictionId: "us", name: "U.S. District Court for the Western District of Oklahoma", abbreviation: "W.D. Okla.", level: "trial" as const, circuit: "10", district: "W.D. Okla.", url: "https://www.okwd.uscourts.gov" },
  { id: "usdc-dut", jurisdictionId: "us", name: "U.S. District Court for the District of Utah", abbreviation: "D. Utah", level: "trial" as const, circuit: "10", district: "D. Utah", url: "https://www.utd.uscourts.gov" },
  { id: "usdc-dwy", jurisdictionId: "us", name: "U.S. District Court for the District of Wyoming", abbreviation: "D. Wyo.", level: "trial" as const, circuit: "10", district: "D. Wyo.", url: "https://www.wyd.uscourts.gov" },

  // ── Eleventh Circuit ───────────────────────────────────────────
  { id: "usdc-ndal", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Alabama", abbreviation: "N.D. Ala.", level: "trial" as const, circuit: "11", district: "N.D. Ala.", url: "https://www.alnd.uscourts.gov" },
  { id: "usdc-mdal", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Alabama", abbreviation: "M.D. Ala.", level: "trial" as const, circuit: "11", district: "M.D. Ala.", url: "https://www.almd.uscourts.gov" },
  { id: "usdc-sdal", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Alabama", abbreviation: "S.D. Ala.", level: "trial" as const, circuit: "11", district: "S.D. Ala.", url: "https://www.alsd.uscourts.gov" },
  { id: "usdc-ndfl", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Florida", abbreviation: "N.D. Fla.", level: "trial" as const, circuit: "11", district: "N.D. Fla.", url: "https://www.flnd.uscourts.gov" },
  { id: "usdc-mdfl", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Florida", abbreviation: "M.D. Fla.", level: "trial" as const, circuit: "11", district: "M.D. Fla.", url: "https://www.flmd.uscourts.gov" },
  { id: "usdc-sdfl", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Florida", abbreviation: "S.D. Fla.", level: "trial" as const, circuit: "11", district: "S.D. Fla.", url: "https://www.flsd.uscourts.gov" },
  { id: "usdc-ndga", jurisdictionId: "us", name: "U.S. District Court for the Northern District of Georgia", abbreviation: "N.D. Ga.", level: "trial" as const, circuit: "11", district: "N.D. Ga.", url: "https://www.gand.uscourts.gov" },
  { id: "usdc-mdga", jurisdictionId: "us", name: "U.S. District Court for the Middle District of Georgia", abbreviation: "M.D. Ga.", level: "trial" as const, circuit: "11", district: "M.D. Ga.", url: "https://www.gamd.uscourts.gov" },
  { id: "usdc-sdga", jurisdictionId: "us", name: "U.S. District Court for the Southern District of Georgia", abbreviation: "S.D. Ga.", level: "trial" as const, circuit: "11", district: "S.D. Ga.", url: "https://www.gasd.uscourts.gov" },

  // ── D.C. Circuit ───────────────────────────────────────────────
  { id: "usdc-ddc", jurisdictionId: "us", name: "U.S. District Court for the District of Columbia", abbreviation: "D.D.C.", level: "trial" as const, circuit: "DC", district: "D.D.C.", url: "https://www.dcd.uscourts.gov" },
];

/**
 * Mapping from state/territory ID to the IDs of federal district courts
 * that serve that jurisdiction.
 */
const STATE_TO_DISTRICT_IDS: Record<string, string[]> = {
  // 1st Circuit
  me: ["usdc-dme"],
  ma: ["usdc-dma"],
  nh: ["usdc-dnh"],
  ri: ["usdc-dri"],
  pr: ["usdc-dpr"],
  // 2nd Circuit
  ct: ["usdc-dct"],
  ny: ["usdc-ndny", "usdc-sdny", "usdc-edny", "usdc-wdny"],
  vt: ["usdc-dvt"],
  // 3rd Circuit
  de: ["usdc-dde"],
  nj: ["usdc-dnj"],
  pa: ["usdc-edpa", "usdc-mdpa", "usdc-wdpa"],
  vi: ["usdc-dvi"],
  // 4th Circuit
  md: ["usdc-dmd"],
  nc: ["usdc-ednc", "usdc-mdnc", "usdc-wdnc"],
  sc: ["usdc-dsc"],
  va: ["usdc-edva", "usdc-wdva"],
  wv: ["usdc-ndwv", "usdc-sdwv"],
  // 5th Circuit
  la: ["usdc-edla", "usdc-mdla", "usdc-wdla"],
  ms: ["usdc-ndms", "usdc-sdms"],
  tx: ["usdc-ndtx", "usdc-sdtx", "usdc-edtx", "usdc-wdtx"],
  // 6th Circuit
  ky: ["usdc-edky", "usdc-wdky"],
  mi: ["usdc-edmi", "usdc-wdmi"],
  oh: ["usdc-ndoh", "usdc-sdoh"],
  tn: ["usdc-edtn", "usdc-mdtn", "usdc-wdtn"],
  // 7th Circuit
  il: ["usdc-cdil", "usdc-ndil", "usdc-sdil"],
  in: ["usdc-ndin", "usdc-sdin"],
  wi: ["usdc-edwi", "usdc-wdwi"],
  // 8th Circuit
  ar: ["usdc-edar", "usdc-wdar"],
  ia: ["usdc-ndia", "usdc-sdia"],
  mn: ["usdc-dmn"],
  mo: ["usdc-edmo", "usdc-wdmo"],
  ne: ["usdc-dne"],
  nd: ["usdc-dnd"],
  sd: ["usdc-dsd"],
  // 9th Circuit
  ak: ["usdc-dak"],
  az: ["usdc-daz"],
  ca: ["usdc-cdca", "usdc-edca", "usdc-ndca", "usdc-sdca"],
  hi: ["usdc-dhi"],
  id: ["usdc-did"],
  mt: ["usdc-dmt"],
  nv: ["usdc-dnv"],
  or: ["usdc-dor"],
  wa: ["usdc-edwa", "usdc-wdwa"],
  gu: ["usdc-dgu"],
  mp: ["usdc-dnmi"],
  // 10th Circuit
  co: ["usdc-dco"],
  ks: ["usdc-dks"],
  nm: ["usdc-dnm"],
  ok: ["usdc-edok", "usdc-ndok", "usdc-wdok"],
  ut: ["usdc-dut"],
  wy: ["usdc-dwy"],
  // 11th Circuit
  al: ["usdc-ndal", "usdc-mdal", "usdc-sdal"],
  fl: ["usdc-ndfl", "usdc-mdfl", "usdc-sdfl"],
  ga: ["usdc-ndga", "usdc-mdga", "usdc-sdga"],
  // D.C.
  dc: ["usdc-ddc"],
};

/** Returns the federal district courts that serve a given state or territory. */
export function getDistrictCourts(stateId: string): Court[] {
  const ids = STATE_TO_DISTRICT_IDS[stateId.toLowerCase()];
  if (!ids) return [];
  return FEDERAL_DISTRICT_COURTS.filter((c) => ids.includes(c.id));
}
