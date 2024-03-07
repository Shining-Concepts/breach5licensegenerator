function f(a)
{
    b = [];
    for (i = 1; i < a.length; i += 2)
        b.push(String(a[i]) + String(a[i - 1]));
    return b;
}

function g(x)
{
    y = [];
    for (u = 0; u < x.length; u++)
    {
        v = "";
        z = x[u];
        for (j = 0; j < z.length; j++)
        {
            w = (j + 1) % z.length + 1;
            v += Math.floor(9 - z.charAt(w - 1));
        }
        y.push(v);
    }
    return y;
}

function r(s, p, q)
{
    l = s.length;
    b = l * 2;
    m = p - b + l - q;

    a = [];
    for (i = 0; i < s.length; i++)
        a.push(s.charCodeAt(i) + m);

    n = f(g(f(a)));
    o = n[0];
    for (w = 1; w < n.length; w++)
        o += "-" + n[w];

    return o;
}

function generateLicense()
{
    vigil_os_id = document.getElementById("inputbox").value;

    if (!vigil_os_id) return; //Do nothing if textbox is empty

    license = r(vigil_os_id, 47, 32);

    p = document.getElementById("result");

    if (typeof license != "string")
        license = "";
    else if (2 != (license.split("-").length - 1)) //Valid licenses have 2 dashes
        license = "";

    if (license)
        p.textContent = "Your Breach 5 key is " + license;
    else
        p.textContent = "Couldn't generate a valid key for \"" + vigil_os_id + "\". Did you enter your Vigil OS ID correctly?";
}