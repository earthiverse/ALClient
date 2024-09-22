export class Configuration {
  /** If true, we will throw an error when using a skill that's on cooldown */
  public CHECK_COOLDOWN_BEFORE_EMIT = false;
  /** How long to wait for the `welcome` socket when initially connecting */
  public CONNECT_TIMEOUT_MS = 5000;
  /** How long to wait for a response for a socket emit */
  public SOCKET_EMIT_TIMEOUT_MS = 1000;
  /** How long to wait before reconnecting (https://socket.io/docs/v4/client-api/#managerreconnectiondelayvalue) */
  public SOCKET_RECONNECT_DELAY_MS = 5000;
  /** Randomization factor for reconnecting (https://socket.io/docs/v4/client-options/#randomizationfactor) */
  public SOCKET_RANDOMIZATION_FACTOR = 0.9;
}

export default new Configuration();
