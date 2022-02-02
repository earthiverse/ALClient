import { Game } from "./Game"

test("Game.login", async () => {
    try {
        await Game.login("hyprkookeez@gmail.com", "thisIsNotMyRealPasswordLOL")
    } catch (e) {
        expect(e).toMatch("Wrong Password")
    }

    try {
        await Game.loginJSONFile("this.file.does.not.exist")
    } catch (e) {
        expect(e).toMatch(/Could not locate '.+?'\./)
    }

    try {
        await Game.loginJSONFile("credentials.json.sample")
    } catch (e) {
        expect(e).toMatch("Wrong Password")
    }

    expect(await Game.loginJSONFile("credentials.json")).toBe(true)
}, 60_000)