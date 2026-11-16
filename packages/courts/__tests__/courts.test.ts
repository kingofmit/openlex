import {
  getStateCourtSystem,
  getDistrictCourts,
  searchCourts,
  getHighestCourt,
  STATE_COURT_SYSTEMS,
} from "../src";

describe("getStateCourtSystem", () => {
  it("returns NY court system with notes about confusing naming", () => {
    const ny = getStateCourtSystem("ny");
    expect(ny).toBeDefined();
    expect(ny!.stateName).toBe("New York");
    expect(ny!.notes.length).toBeGreaterThan(0);
    expect(ny!.notes.some((n) => n.toLowerCase().includes("confusing"))).toBe(true);
  });

  it("NY highest court is 'Court of Appeals' (not 'Supreme Court')", () => {
    const ny = getStateCourtSystem("ny");
    expect(ny).toBeDefined();
    expect(ny!.supremeCourt.name).toContain("Court of Appeals");
    expect(ny!.supremeCourt.level).toBe("supreme");
  });

  it("returns undefined for invalid state ID", () => {
    expect(getStateCourtSystem("zz")).toBeUndefined();
  });

  it("accepts uppercase state codes", () => {
    const ca = getStateCourtSystem("CA");
    expect(ca).toBeDefined();
    expect(ca!.stateName).toBe("California");
  });
});

describe("hasIntermediateAppellate", () => {
  it("TX has intermediate appellate courts", () => {
    const tx = getStateCourtSystem("tx");
    expect(tx).toBeDefined();
    expect(tx!.hasIntermediateAppellate).toBe(true);
  });

  it("DE does not have intermediate appellate courts", () => {
    const de = getStateCourtSystem("de");
    expect(de).toBeDefined();
    expect(de!.hasIntermediateAppellate).toBe(false);
  });

  it("ME does not have intermediate appellate courts", () => {
    const me = getStateCourtSystem("me");
    expect(me).toBeDefined();
    expect(me!.hasIntermediateAppellate).toBe(false);
  });

  it("MT does not have intermediate appellate courts", () => {
    const mt = getStateCourtSystem("mt");
    expect(mt).toBeDefined();
    expect(mt!.hasIntermediateAppellate).toBe(false);
  });

  it("several states lack intermediate appellate courts", () => {
    // Per the source comments: DE, ME, MT, NE, NH, ND, RI, SD, VT, WV, WY
    const statesWithout = ["de", "me", "mt", "ne", "nh", "nd", "ri", "sd", "vt", "wv", "wy"];
    for (const id of statesWithout) {
      const system = getStateCourtSystem(id);
      expect(system).toBeDefined();
      expect(system!.hasIntermediateAppellate).toBe(false);
    }
  });
});

describe("getDistrictCourts", () => {
  it("returns 4 federal districts for CA", () => {
    const courts = getDistrictCourts("ca");
    expect(courts).toHaveLength(4);
    for (const court of courts) {
      expect(court.name).toContain("California");
      expect(court.level).toBe("trial");
    }
  });

  it("returns at least 1 federal district for any state", () => {
    const courts = getDistrictCourts("ny");
    expect(courts.length).toBeGreaterThanOrEqual(1);
  });

  it("returns empty array for unknown state", () => {
    const courts = getDistrictCourts("zz");
    expect(courts).toHaveLength(0);
  });
});

describe("searchCourts", () => {
  it("returns results for 'supreme'", () => {
    const results = searchCourts("supreme");
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns results for 'district'", () => {
    const results = searchCourts("district");
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns empty for nonsense query", () => {
    const results = searchCourts("xyznonexistent123");
    expect(results).toHaveLength(0);
  });
});

describe("getHighestCourt", () => {
  it("returns the supreme court for a state", () => {
    const court = getHighestCourt("ca");
    expect(court).toBeDefined();
    expect(court!.level).toBe("supreme");
  });
});

describe("STATE_COURT_SYSTEMS coverage", () => {
  it("has 51 entries (50 states + DC)", () => {
    expect(STATE_COURT_SYSTEMS).toHaveLength(51);
  });

  it("every system has a supreme court and trial courts", () => {
    for (const system of STATE_COURT_SYSTEMS) {
      expect(system.supremeCourt).toBeDefined();
      expect(system.supremeCourt.level).toBe("supreme");
      expect(system.trialCourts.length).toBeGreaterThan(0);
    }
  });
});
