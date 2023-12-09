import { ProgrammingIcons, FrontendIcons, BackendIcons, EditorIcons } from './Icons';
import { orangeIconStyles, blueIconStyles, purpleIconStyles, redIconStyles } from './IconColor';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const TechStack = () => {
    return (
        <div>
            <Stack direction="horizontal" gap={3}>
                <Badge pill bg="dark">Front-end</Badge>
                {FrontendIcons.map((icon, index) => (
                    <div key={index} className="p-2 white-icon">
                        {icon.icon({ style: blueIconStyles, title: icon.label })}
                    </div>
                ))}
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <Badge pill bg="dark">Languages</Badge>
                {ProgrammingIcons.map((icon, index) => (
                    <div key={index} className="p-2 white-icon">
                        {icon.icon({ style: orangeIconStyles, title: icon.label })}
                    </div>
                ))}
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <Badge pill bg="dark">Back-end</Badge>
                {BackendIcons.map((icon, index) => (
                    <div key={index} className="p-2 white-icon">
                        {icon.icon({ style: purpleIconStyles, title: icon.label })}
                    </div>
                ))}
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <Badge pill bg="dark">IDEs</Badge>
                {EditorIcons.map((icon, index) => (
                    <div key={index} className="p-2 white-icon">
                        <icon.icon style={redIconStyles} title={icon.label} />
                    </div>
                ))}
            </Stack>
        </div>
    );
}

export default TechStack;
