import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography } from "shared/ui/Typography/Typography"

export function CheckboxGroup() {
    return (
        <div>
            <Typography>Назначение</Typography>
            <Checkbox label="" id="1" checked onChange={() => null} />
            <Checkbox label="" id="1" checked onChange={() => null} />
            <Checkbox label="" id="1" checked onChange={() => null} />
        </div>
    )
}
