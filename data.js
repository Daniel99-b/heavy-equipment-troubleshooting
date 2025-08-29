const FAULTS = [
  {
    "machine": "Wheel Loader",
    "system": "Engine",
    "fault": "Hard starting",
    "symptoms": "Long cranking, white smoke, low power",
    "causes": "Air in fuel system, clogged fuel filters, weak batteries",
    "repair": "Bleed fuel system, replace filters, test/replace batteries and starter",
    "preventive": "Change fuel filters on schedule; service battery and terminals monthly",
    "mistakes": "Replacing injectors before checking fuel supply and filter restriction"
  },
  {
    "machine": "Wheel Loader",
    "system": "Hydraulics",
    "fault": "Slow bucket response",
    "symptoms": "Bucket lifts slowly, weak breakout force, pump whining",
    "causes": "Low hydraulic oil, air in system, clogged return filter, worn pump",
    "repair": "Top up oil, bleed system, replace filters, test and replace pump if low flow",
    "preventive": "Check level daily; keep breathers clean; change filters at hours interval",
    "mistakes": "Running with cavitating pump\u2014causes rapid pump damage"
  },
  {
    "machine": "Wheel Loader",
    "system": "Brakes",
    "fault": "Brake fade",
    "symptoms": "Pedal normal but longer stopping distance, brake smell",
    "causes": "Overheated brakes, worn pads/discs, contaminated oil",
    "repair": "Allow to cool, replace pads/discs, flush brake circuit if contaminated",
    "preventive": "Use engine braking downhill; service cooling and adjusters",
    "mistakes": "Topping fluid repeatedly without fixing leaks"
  },
  {
    "machine": "Wheel Loader",
    "system": "Electrical",
    "fault": "No crank",
    "symptoms": "Clicking relay or dead panel",
    "causes": "Flat battery, corroded terminals, faulty starter relay/solenoid",
    "repair": "Charge/replace battery, clean terminals, test relay/solenoid and starter",
    "preventive": "Protect terminals with dielectric grease; check charging voltage",
    "mistakes": "Bypassing safety interlocks without diagnosis"
  },
  {
    "machine": "Bulldozer",
    "system": "Transmission",
    "fault": "Won\u2019t move in gear",
    "symptoms": "Engine revs, machine stationary or slips",
    "causes": "Low transmission oil, worn clutch packs, damaged torque converter, clogged suction screen",
    "repair": "Refill oil to spec, replace filters, inspect suction screen, overhaul clutch/TC if slipping",
    "preventive": "Monitor oil temp and level; change filters on schedule",
    "mistakes": "Overfilling oil\u2014foaming and loss of pressure"
  },
  {
    "machine": "Bulldozer",
    "system": "Steering",
    "fault": "Hard steering / drift",
    "symptoms": "Difficult to turn, machine pulls to one side",
    "causes": "Low steering hydraulic oil, worn pump, misadjusted or worn steering clutches",
    "repair": "Refill oil, pressure/flow test pump, adjust/replace steering clutch/brakes",
    "preventive": "Daily check of steering oil; inspect linkages and pivot points",
    "mistakes": "Adjusting clutches without verifying hydraulic pressures"
  },
  {
    "machine": "Bulldozer",
    "system": "Undercarriage",
    "fault": "Track derailing",
    "symptoms": "Track walks off idler/sprocket under load",
    "causes": "Loose track tension, worn rollers/idlers, bent track frame, debris buildup",
    "repair": "Adjust track tension to spec, replace worn components, clean debris, inspect alignment",
    "preventive": "Clean undercarriage daily; maintain correct sag",
    "mistakes": "Over-tightening track\u2014accelerates wear"
  },
  {
    "machine": "Bulldozer",
    "system": "Engine",
    "fault": "Overheating",
    "symptoms": "High temp, coolant boiling, power loss",
    "causes": "Plugged radiator, low coolant, failed fan drive, stuck thermostat",
    "repair": "Clean/flush radiator, top coolant, service fan drive, replace thermostat",
    "preventive": "Blow out cores daily in dusty sites; use correct coolant mix",
    "mistakes": "Opening radiator cap hot\u2014injury risk"
  },
  {
    "machine": "Excavator",
    "system": "Hydraulics",
    "fault": "Boom won\u2019t lift / weak",
    "symptoms": "Slow boom raise, stalls under load",
    "causes": "Worn boom cylinder seals, faulty main relief, low pump flow",
    "repair": "Repack cylinder, test/adjust relief valve, flow test pump and replace if needed",
    "preventive": "Oil analysis; keep suction strainers clean; timely filter changes",
    "mistakes": "Cranking relief up blindly\u2014can damage components"
  },
  {
    "machine": "Excavator",
    "system": "Travel",
    "fault": "One track slow / no travel",
    "symptoms": "Machine veers, one side weak",
    "causes": "Travel motor failure, blocked case drain, joystick or pilot control fault",
    "repair": "Case drain flow test, check final drive oil, inspect pilot pressures and control valve",
    "preventive": "Change final drive oil at interval; check case drain filters",
    "mistakes": "Continuing to operate with metal in final drive oil"
  },
  {
    "machine": "Excavator",
    "system": "Electrical",
    "fault": "Battery not charging",
    "symptoms": "Battery light on, dim lights, engine stalls after running",
    "causes": "Loose alternator belt, failed alternator, corroded connections",
    "repair": "Tension/replace belt, test/replace alternator, clean/tighten connections",
    "preventive": "Weekly belt tension checks; protect terminals",
    "mistakes": "Replacing battery without testing charge circuit"
  },
  {
    "machine": "Excavator",
    "system": "Engine",
    "fault": "Black smoke / low power",
    "symptoms": "Sooty exhaust, sluggish response",
    "causes": "Restricted air filter, faulty turbo, overfueling injector",
    "repair": "Replace/clean air elements, test turbo boost, injector test/replace",
    "preventive": "Service air filters frequently in dusty work",
    "mistakes": "Running with missing pre-filter or damaged seals"
  },
  {
    "machine": "Forklift",
    "system": "Brakes",
    "fault": "Poor braking",
    "symptoms": "Spongy or hard pedal, long stopping distance",
    "causes": "Low brake fluid, air in lines, worn shoes/pads, faulty master cylinder",
    "repair": "Refill and bleed brakes, replace shoes/pads and master if leaking",
    "preventive": "Weekly fluid checks; inspect linings; fix leaks promptly",
    "mistakes": "Operating with known brake leaks"
  },
  {
    "machine": "Forklift",
    "system": "Mast / Lift",
    "fault": "Mast won\u2019t lift / jerky",
    "symptoms": "No lift or chattering, uneven stages",
    "causes": "Stretched chains, leaking lift cylinder, low hydraulic oil, sticky valve",
    "repair": "Adjust/replace chains, repack/replace cylinder, top oil, service control valve",
    "preventive": "Lubricate chains; inspect rollers; keep guides clean",
    "mistakes": "Exceeding rated capacity"
  },
  {
    "machine": "Forklift",
    "system": "Drive",
    "fault": "No forward but reverse ok",
    "symptoms": "Moves only in reverse",
    "causes": "Directional solenoid fault, clutch pack wear, low transmission oil",
    "repair": "Test/replace solenoid, inspect clutch packs, refill/repair leaks",
    "preventive": "Keep transmission oil within range; change filters",
    "mistakes": "Forcing selector repeatedly\u2014causes clutch damage"
  },
  {
    "machine": "Forklift",
    "system": "Operator Error",
    "fault": "Machine tipping during load",
    "symptoms": "Front wheels lighten, mast leans forward",
    "causes": "Overloading, high mast while traveling, uneven ground",
    "repair": "Stop, lower load, re-level; retrain operator on load chart",
    "preventive": "Keep forks low while traveling; always consult load chart",
    "mistakes": "Adding counterweights unofficially"
  }
];