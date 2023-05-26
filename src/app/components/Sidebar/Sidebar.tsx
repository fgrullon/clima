
const Sidebar = () => {
    return (
        <div
        style={{
            borderRadius : "5px",
            border : "solid gray 2px",
            width: "8em",
        }}
        >
            <ul>
                <li>Weather</li>
                <li>Cities</li>
                <li>Map</li>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;