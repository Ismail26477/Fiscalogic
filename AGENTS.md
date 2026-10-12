<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions
- Keep pages as TanStack file-based routes and share the site chrome, content configuration, and small interaction utilities across those routes; the framework is fixed and this keeps the multi-page site consistent.
- Keep contact and newsletter forms client-side and explicitly non-persistent until a backend is connected; no backend exists in this project and a success state must not imply delivery or storage.
