export class Configuration {
  /** How long to wait for the `welcome` socket when initially connecting */
  public CONNECT_TIMEOUT_MS = 5000;
  /** How long to wait for a response for a socket emit */
  public SOCKET_EMIT_TIMEOUT_MS = 2500;
}

export default new Configuration();
