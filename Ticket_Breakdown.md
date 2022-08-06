# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket One**
Accommodate for facility agent custom id in shift creation module
- Create an EAV (Entity Attribute Value) relationship for the facility and agent.
- The EAV table (FacilitiesAgents) will have the following columns; id, facility_id, agent_id, facility_agent_id
*Scope*
- Backend
*Assumption*
- ORM is used. Thus `getShiftsByFacility` will henceforth return the newly added facility_agent_id
*Acceptance Criteria*
- Migration of facility_agent_id can happen
- `getShiftsByFacility` returns facility_agent_id for any migrated data



**Ticket Two**
- Extend the shift creation/edit module to accommodate for facility_agent_id
*Scope*
- Frontend and backend
*Acceptance Criteria*
When creating a shift;
- facility_agent_id is available for an agent who alread have
- facility_agent_id can be added for an agent who dosent have at that time


**Tickect Three**
- Subtitute facility_agent_id instead for agent_id in the `generateReport`
*Scope*
- Backend
*Assumption*
- `generateReport` funtion takes in agent_id as a paramater or by injection
*Acceptance Criteria*
- Reports now have the custom facility_agent_id instead of agent_id
