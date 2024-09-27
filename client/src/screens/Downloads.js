import React, { useState } from "react";
import useSWR from "swr";
import Input from "../components/Input";
import DownloadItem from "../components/DownloadItem";

function Downloads() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR("/api/v1/torrent/list", fetcher, { refreshInterval: 1000 });
  const [link, setLink] = useState("");
  const [adding, setAdding] = useState(false);
  const [addingError, setAddingError] = useState("");

  const add = async e => {
    if (e) e.preventDefault();
    setAdding(true);

    if (link.indexOf("magnet:") !== 0) {
      setAddingError("Link is not a magnet link");
    } else {
      setAddingError("");
      const resp = await fetch(`/api/v1/torrent/add?magnet=${encodeURIComponent(link)}`);

      if (resp.status === 200) {
        setLink("");
      } else {
        setAddingError("An error occured");
      }
    }

    setAdding(false);
  };

  return (
    <>
      <h1>Downloads
        <a className="h2" style={{ paddingLeft: 10 }} href="/downloads">
          <ion-icon name="folder-outline" />
        </a>
      </h1>

      <form onSubmit={add}>
        <Input
          id="link"
          name="link"
          placeholder="magnet:?..."
          value={link}
          onChange={setLink}
          required
        />
        {addingError !== "" && <div className="text-danger">{addingError}</div>}
        <button disabled={adding} className={`btn primary${adding ? " loading" : ""}`} type="submit">
          Add
        </button>
      </form>
      {error && <div className="text-danger mt-1">An error occured. Check your internet.</div>}
      {data && (
        <div className="d-flex-column mt-1">
          {data.torrents.map(torrent => (
            <DownloadItem torrent={torrent} key={torrent.magnetURI} />
          ))}
        </div>
      )}
    </>
  );
}

export default Downloads;
