import { Game } from "./Game"

test("Game.login", async () => {
    try {
        await Game.login("hyprkookeez@gmail.com", "thisIsNotMyRealPasswordLOL")
    } catch (e) {
        expect(e.message).toMatch("Wrong Password")
    }

    try {
        await Game.loginJSONFile("this.file.does.not.exist")
    } catch (e) {
        expect(e.message).toMatch(/Could not locate '.+?'\./)
    }

    try {
        await Game.loginJSONFile("credentials.json.sample")
    } catch (e) {
        expect(e.message).toMatch("Wrong Password")
    }

    expect(await Game.loginJSONFile("credentials.json")).toBe(true)
}, 60_000)

test("Game.disconnectCharacter", async () => {
    const disconnectWizard = await Game.disconnectCharacter("Wizard")
    expect(disconnectWizard).toBe(false)

    const disconnectGarbage = await Game.disconnectCharacter(`a${Math.random().toString(36).substring(2, 9)}`)
    expect(disconnectGarbage).toBe(false)

    const disconnectMer3 = await Game.disconnectCharacter("earthMer3")
    expect(disconnectMer3).toBe(true)
}, 60_000)
