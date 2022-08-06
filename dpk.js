let candidate = null;
exports.deterministicPartitionKey = (event) => {
  candidate = getCandidateFromevent(event);

  if(!candidate)
    candidate = createCandidateFromEvent(event)

  candidate = formatCandidate(candidate)
  
  return candidate
};


/**
 * Get candidate from Event
 * @param {*} event 
 * @returns 
 */
function getCandidateFromevent(event) {
  if (event) {
    if (event.partitionKey) {
      candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : event.partitionKey
    } 
  }
  return candidate;
}

/**
 * Create candidat from event
 * @param {*} event 
 * @returns 
 */
function createCandidateFromEvent(event){
  if (event) {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  return candidate
}

/**
 * Format candidate
 * @param {*} candidate 
 * @returns 
 */
function formatCandidate(candidate) {
  const MAX_PARTITION_KEY_LENGTH = 256;
  const TRIVIAL_PARTITION_KEY = "0";
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate ? candidate : TRIVIAL_PARTITION_KEY;
}